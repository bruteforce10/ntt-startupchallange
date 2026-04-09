import { pb } from "@/utils/config-pocket-base";
import { NextResponse } from "next/server";

async function getCollectionRecords(collectionName) {
  try {
    const records = await pb.collection(collectionName).getFullList({
      sort: "-created",
    });

    return { records, error: null };
  } catch (error) {
    console.error(`Failed to fetch ${collectionName}:`, error);

    return {
      records: [],
      error: `Failed to fetch ${collectionName}`,
    };
  }
}

export async function GET() {
  const [newsArticlesResult, newsActivitiesResult] = await Promise.all([
    getCollectionRecords("news_article"),
    getCollectionRecords("news_activity"),
  ]);

  return NextResponse.json({
    newsArticles: newsArticlesResult.records,
    newsActivities: newsActivitiesResult.records,
    errors: [newsArticlesResult.error, newsActivitiesResult.error].filter(
      Boolean
    ),
  });
}
