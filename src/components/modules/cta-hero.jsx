import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CtaHero = () => {
  return (
    <div className="flex gap-4">
      {/* <Button className="bg-blue-ntt border-none rounded-md text-white px-6 py-5 cursor-pointer hover:bg-blue-ntt/80">
        <Link
          href={"https://www.eventbrite.com/e/1323350509999?aff=oddtdtcreator"}
          className="block"
          target="_blank"
        >
          Attend Final Day
        </Link>
      </Button> */}
      {/* <DropdownMenu>
        <DropdownMenuTrigger className="bg-blue-ntt border-none rounded-md text-white px-6 py-2 cursor-pointer hover:bg-blue-ntt/80">
          Register
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"bg-white text-black mt-2 mb-2"}>
          <DropdownMenuItem>
            <Link href={"/register?type=startup"} className="text-lg">
              Startup Registration
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/register?type=partner"} className="text-lg">
              Partner Registration
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={
                "https://www.eventbrite.com/e/1323350509999?aff=oddtdtcreator"
              }
              className="text-lg"
            >
              Attend Final Day
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};

export default CtaHero;
