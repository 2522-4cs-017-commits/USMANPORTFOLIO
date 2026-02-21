import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET(req) {
  try {
    console.log("\n=== 🔍 PARSING TEST ===");
    
    // Show raw env var
    const rawEnv = process.env.GOOGLE_PRIVATE_KEY || "";
    console.log("Step 0: Raw GOOGLE_PRIVATE_KEY from .env");
    console.log("  Length:", rawEnv.length);
    console.log("  Starts with quote:", rawEnv[0]);
    console.log("  Ends with quote:", rawEnv[rawEnv.length - 1]);
    console.log("  First 100 chars:", rawEnv.substring(0, 100));
    
    // Parse it
    console.log("\nStep 1: Parsing key");
    let rawKey = rawEnv;
    if (rawKey.startsWith('"') && rawKey.endsWith('"')) {
      rawKey = rawKey.slice(1, -1);
      console.log("  ✓ Removed quotes");
    }

    // Convert escaped newlines to actual newlines
    const privateKey = rawKey
      .split('\\n').join('\n')
      .replace(/\\n/g, '\n');
    
    console.log("  ✓ Converted escaped newlines");
    console.log("  Final key length:", privateKey.length);
    console.log("  Has 'BEGIN PRIVATE KEY':", privateKey.includes("BEGIN PRIVATE KEY"));
    console.log("  Has 'END PRIVATE KEY':", privateKey.includes("END PRIVATE KEY"));
    
    const lines = privateKey.split('\n').length;
    console.log("  Line count:", lines);
    console.log("  First line:", privateKey.split('\n')[0]);
    console.log("  Last line:", privateKey.split('\n').pop());

    console.log("\nStep 2: Checking environment variables");
    console.log("  EMAIL:", process.env.GOOGLE_CLIENT_EMAIL);
    console.log("  SHEET ID:", process.env.GOOGLE_SHEET_ID);

    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_SHEET_ID) {
      throw new Error("Missing EMAIL or SHEET_ID environment variables");
    }

    console.log("\nStep 3: Creating JWT authentication");
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      privateKey,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );
    console.log("  ✓ JWT created");

    // Get access token to verify auth works
    console.log("\nStep 4: Getting access token");
    const { token } = await auth.getAccessToken();
    console.log("  ✓ Token obtained");

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    console.log("\nStep 5: Accessing Google Sheet");
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

    const sheetNames = response.data.sheets.map(s => s.properties.title);
    console.log("  ✓ Sheet names retrieved:", sheetNames);

    return NextResponse.json({
      success: true,
      message: "✅ Everything working! Google Sheets is properly configured.",
      details: {
        email: process.env.GOOGLE_CLIENT_EMAIL,
        sheetId: process.env.GOOGLE_SHEET_ID,
        sheetNames,
        keyParsed: true,
      }
    });
  } catch (error) {
    console.error("\n❌ ERROR:", error.message);
    console.error("Stack:", error.stack);

    let hint = "Check your .env.local file";
    if (error.message.includes("No key or keyFile")) {
      hint = "❌ Private key not parsed correctly. Try reading .env.local - the key may be corrupted or improperly formatted.";
    } else if (error.message.includes("Member not found")) {
      hint = "❌ Service account NOT shared. Share sheet with: sheets-writer@buoyant-silicon-486409-n0.iam.gserviceaccount.com";
    } else if (error.message.includes("unregistered")) {
      hint = "❌ Service account needs Editor permission";
    }

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        hint,
      },
      { status: 500 }
    );
  }
}
