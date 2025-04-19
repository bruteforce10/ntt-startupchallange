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
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email_address,
    subject: "Terima kasih sudah mengisi form!",
    html,
  };

  try {
    const allRecords = await pb.collection("data_startup").getFullList();
    const record = allRecords.find(
      (r) => r.email_address === data.email_address
    );

    if (record) {
      await pb.collection("data_startup").update(record.id, data);
    } else {
      await pb.collection("data_startup").create(data);
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gagal kirim", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
