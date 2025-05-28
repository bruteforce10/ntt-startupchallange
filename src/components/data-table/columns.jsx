"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
  },
  {
    accessorKey: "email_address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "job_title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Title" />
    ),
  },
  {
    accessorKey: "startup_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Startup" />
    ),
  },
  {
    accessorKey: "website",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Website" />
    ),
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
  },
  {
    accessorKey: "collaborate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Collaboration" />
    ),
  },
  {
    accessorKey: "how_did_you_hear",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="How Did You Hear" />
    ),
    cell: ({ row }) => {
      const value = row?.original?.how_did_you_hear;
      return value ? value : <div>N/A</div>;
    },
  },
  {
    accessorKey: "file_proposal",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Proposal" />
    ),
    cell: ({ row }) => {
      const fileUrl = `https://pb.ntt-startupchallenge.com/api/files/pbc_3609018881/${row?.original?.id}/${row?.original?.file_proposal}`;
      if (row?.original?.file_proposal) {
        return (
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            View Proposal
          </a>
        );
      } else {
        return <div>N/A</div>;
      }
    },
  },
  {
    accessorKey: "opt_link_file_proposal",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="(Option) Link File Proposal"
      />
    ),
    cell: ({ row }) => {
      if (row?.original?.opt_link_file_proposal) {
        return (
          <a
            href={row?.original?.opt_link_file_proposal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Direct Link Proposal
          </a>
        );
      } else {
        return <div>N/A</div>;
      }
    },
  },
];
