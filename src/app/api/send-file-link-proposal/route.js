import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const email_address = formData.get("email_address");
    const opt_link_file_proposal = formData.get("opt_link_file_proposal");

    const allRecords = await pb.collection("data_startup").getFullList();
    const record = allRecords.find((r) => r.email_address === email_address);

    if (!record) {
      return NextResponse.json(
        { success: false, message: "Email not found" },
        { status: 404 }
      );
    }

    const recordData = {
      collaborate: record.collaborate,
      country: record.country,
      email_address: record.email_address,
      first_name: record.first_name,
      last_name: record.last_name,
      phone: record.phone,
      startup_name: record.startup_name,
      website: record.website,
      opt_link_file_proposal,
    };

    await pb.collection("data_startup").update(record.id, recordData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gagal kirim", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
