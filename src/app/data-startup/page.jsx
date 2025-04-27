import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import InitialPage from "@/components/pages/initial-page";
import { startups } from "@/constant/data-startup";

import React from "react";

export default function DataStartupPage() {
  return (
    <InitialPage>
      <main className="container mx-auto px-4 py-8">
        <DataTable columns={columns} data={startups} />
      </main>
    </InitialPage>
  );
}
