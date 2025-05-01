import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allRecords = await pb.collection("data_partner").getFullList();
    return NextResponse.json(allRecords);
  } catch (error) {
    console.error("Error fetching partner data:", error);
    return NextResponse.json(
      { error: "Failed to fetch partner data" },
      { status: 500 }
    );
  }
}
