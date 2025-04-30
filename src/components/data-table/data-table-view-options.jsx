"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import * as XLSX from "xlsx";

export function DataTableViewOptions({ table }) {
  const exportToExcel = () => {
    const selectedRows = table.getSelectedRowModel().rows;

    if (selectedRows.length === 0) {
      alert("No rows selected");
      return;
    }

    const data = selectedRows.map((row) => ({
      ...row.original,
      file_proposal: `https://pb.ntt-startupchallenge.com/api/files/pbc_3609018881/${row?.original?.id}/${row?.original?.file_proposal}`,
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Selected Data");
    XLSX.writeFile(wb, "selected_startups.xlsx");

    alert(`Exported ${selectedRows.length} selected row(s) to Excel.`);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        className="ml-auto h-8"
        onClick={exportToExcel}
        disabled={table.getSelectedRowModel().rows.length === 0}
      >
        <FileText className="mr-2 h-4 w-4" />
        Export Selected
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="ml-auto h-8">
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
