import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  try {
    const allRecords = await pb.collection("data_partner").getFullList();
    const record = allRecords.find(
      (r) => r.email_address === data.email_address
    );

    if (record) {
      await pb.collection("data_partner").update(record.id, data);
    } else {
      await pb.collection("data_partner").create(data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gagal kirim", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
