import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(req) {
  try {
    const data = await req.json();
    const emailAddress = data.email_address?.trim();

    if (!emailAddress) {
      return NextResponse.json(
        { success: false, error: "Email address is required" },
        { status: 400 },
      );
    }

    const firstName = escapeHtml(data.first_name || emailAddress.split("@")[0]);
    const filePath = path.join(
      process.cwd(),
      "public/submission-email-template.html",
    );
    const html = fs.readFileSync(filePath, "utf8").replaceAll(
      "{{name}}",
      firstName,
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: {
        address: process.env.EMAIL_USER,
        name: "NTT Startup Challenge",
      },
      to: emailAddress,
      subject: "NTT Startup Challenge 2026 Pitch Deck Submission Received",
      html,
      headers: {
        "X-Mailer": "NTT Startup Challenge Mailer",
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
        Importance: "normal",
      },
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending submission email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
