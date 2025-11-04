"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { SCHEDULE_DATA } from "@/constant/agenda-ntt-content";

export function EventSchedule() {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((i) => i !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  return (
    <section id="program" className=" pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Event Schedule
          </h2>
          <div className="h-1 w-24 bg-color-ntt mx-auto"></div>
        </div>

        {/* Desktop table (hidden on mobile) */}
        <div className="hidden md:block rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#1e4a7a] text-xl">
                <TableHead className="w-[150px] px-6 py-3 text-white font-semibold">
                  Time
                </TableHead>
                <TableHead className="text-white py-3 font-semibold">
                  Topic
                </TableHead>
                <TableHead className="text-white py-3 font-semibold">
                  Presenter
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SCHEDULE_DATA.map((item, index) => (
                <TableRow
                  key={index}
                  className={cn(
                    "border-b border-[#1a2942] text-lg",
                    item.isBreak ? "bg-[#2ea8d4]" : "bg-[#0d1b30]"
                  )}
                >
                  <TableCell className="font-medium text-white px-6 py-3">
                    {item.time}
                  </TableCell>
                  <TableCell className="text-white py-3 pr-6">
                    {item.content}
                  </TableCell>
                  <TableCell className="text-white py-3 pr-6">
                    {item.presenter || ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile accordion-style table */}
        <div className="md:hidden space-y-2">
          {SCHEDULE_DATA.map((item, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg overflow-hidden",
                item.isBreak ? "bg-[#2ea8d4]" : "bg-[#0d1b30]"
              )}
            >
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleRow(index)}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-white">{item.time}</span>
                  <span className="text-white">{item.content}</span>
                  {item.presenter && (
                    <span className="text-sm text-gray-300 mt-1">
                      {item.presenter}
                    </span>
                  )}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-5 w-5 text-white transition-transform ${
                    expandedRows.includes(index) ? "transform rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
