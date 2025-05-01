import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const data = await req.json();

  const filePath = path.join(process.cwd(), "public/email-template.html");
  let html = fs.readFileSync(filePath, "utf8");
  html = html.replace("{{name}}", data.first_name);
  html = html.replace("{{email}}", data.email_address);

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

  const mailOptions = {
    from: {
      email: process.env.EMAIL_USER,
      name: "NTT Startup Challenge",
    },
    to: data.email_address,
    subject: "Thank you for your registration!",
    html,
    headers: {
      "X-Mailer": "NTT Startup Challenge Mailer",
      "X-Priority": "3",
      "X-MSMail-Priority": "Normal",
      Importance: "normal",
    },
  };

  try {
    // Verify transporter configuration
    await transporter.verify();
    console.log("Server is ready to send emails");

    const allRecords = await pb.collection("data_startup").getFullList();
    const record = allRecords.find(
      (r) => r.email_address === data.email_address
    );

    if (record) {
      await pb.collection("data_startup").update(record.id, data);
    } else {
      await pb.collection("data_startup").create(data);
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
