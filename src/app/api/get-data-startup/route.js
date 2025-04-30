import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  const allRecords = await pb.collection("data_startup").getFullList();
  revalidatePath("/data-startup");
  return NextResponse.json(allRecords);
}
