"use client";

import { columns } from "@/components/data-table/columns-partner";
import { DataTable } from "@/components/data-table/data-table";
import InitialPage from "@/components/pages/initial-page";
import fetcher from "@/utils/fetcher";
import React from "react";
import useSWR from "swr";

const DataPartnerPage = () => {
  const { data, error, isLoading } = useSWR("/api/get-data-partner", fetcher);

  return (
    <InitialPage>
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </main>
    </InitialPage>
  );
};

export default DataPartnerPage;
