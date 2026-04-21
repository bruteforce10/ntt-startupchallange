import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allRecords = await pb.collection("data_startup_2026").getFullList();
    return NextResponse.json(allRecords);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
