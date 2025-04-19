import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";

export async function GET() {
  const allRecords = await pb.collection("news_activity").getFullList();
  return NextResponse.json(allRecords);
}
