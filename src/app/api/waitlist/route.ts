import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !/^[^\n\r\t\s@]+@[^\n\r\t\s@]+\.[^\n\r\t\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Check for environment variables
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"); // Handle newline characters
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      console.error("Missing Google Sheets environment variables");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append the email to the sheet
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:B", // Appends to columns A and B of "Sheet1"
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, email]],
      },
    });

    // Get the updated count of entries
    const countRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!B:B",
    });
    const count = countRes.data.values?.length ?? 0;

    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "✨ New Hoobi Waitlist Signup 🎉",
              color: 0x5865f2,
              fields: [
                {
                  name: "Email",
                  value: email,
                  inline: false,
                },
                {
                  name: "Count",
                  value: `#${count}`,
                  inline: false,
                },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
    }

    return NextResponse.json({ message: "Successfully joined waitlist" }, { status: 200 });
  } catch (error) {
    console.error("Error processing waitlist request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
