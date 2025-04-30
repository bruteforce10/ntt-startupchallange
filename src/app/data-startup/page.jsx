import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import InitialPage from "@/components/pages/initial-page";
import React from "react";

async function getData() {
  const res = await fetch("/api/get-data-startup", {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  const data = await res.json();

  return data;
}

export default async function DataStartupPage() {
  const data = await getData();

  return (
    <InitialPage>
      <main className="container mx-auto px-4 py-8">
        <DataTable columns={columns} data={data} />
      </main>
    </InitialPage>
  );
}
