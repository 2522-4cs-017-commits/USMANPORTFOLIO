import { NextResponse } from "next/server";
import { saveToGoogleSheet } from "../../../lib/google";
import { sendContactEmail } from "../../../lib/email";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("[contact] Received:", { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Save to Google Sheets (best-effort)
    try {
      await saveToGoogleSheet({ name, email, message });
    } catch (err) {
      console.error('[contact] Failed to save to Google Sheets:', err.message);
      // continue — we still want to respond success to avoid breaking UX
    }

    // Send notification email (best-effort)
    try {
      await sendContactEmail({ name, email, message });
    } catch (err) {
      console.error('[contact] Failed to send contact email:', err.message);
      // Continue even if email fails
    }

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (error) {
    console.error("❌ API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process request",
      },
      { status: 500 }
    );
  }
}
// POST function ke neeche ye add karein testing ke liye
export async function GET() {
    return NextResponse.json({ 
        msg: "Bhai, browser se GET request aayi hai. Testing ke liye thik hai, lekin form hamesha POST use karega." 
    });
}