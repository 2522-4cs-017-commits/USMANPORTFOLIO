import { google } from "googleapis";

// 1. Google Auth Configuration
const getAuth = () => {
  try {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    let key = process.env.GOOGLE_PRIVATE_KEY;

    if (!key || !email) {
      console.error("❌ Credentials missing in .env.local");
      return null;
    }

    // Newline aur quotes fix karein
    const formattedKey = key.replace(/\\n/g, '\n').replace(/^"(.*)"$/, '$1');

    return new google.auth.GoogleAuth({
      credentials: {
        client_email: email,
        private_key: formattedKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  } catch (err) {
    console.error("❌ Google Auth Init Error:", err);
    return null;
  }
};

export const auth = getAuth();

// 2. Function to Save Data with Date
export async function saveToGoogleSheet(data) {
  try {
    if (!auth) throw new Error("Google Auth initialize nahi ho saka");

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Date aur Time Pakistan ke mutabiq
    const currentDateTime = new Date().toLocaleString("en-US", { 
      timeZone: "Asia/Karachi",
      dateStyle: "medium",
      timeStyle: "short"
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:D", // A: Date, B: Name, C: Email, D: Message
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[currentDateTime, data.name, data.email, data.message]],
      },
    });

    console.log("✅ Data saved to Sheet with Date:", currentDateTime);
    return { success: true };
  } catch (error) {
    console.error("❌ Sheet Append Error:", error.message);
    throw error;
  }
}