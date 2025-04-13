"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LIST_NAVBAR } from "@/constant/listNavbar";
import EachUtils from "@/utils/eachUtils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-blue-ntt border-b-[4px] transition-all duration-200",
        scrolled
          ? "bg-white/80 backdrop-blur  supports-[backdrop-filter]:bg-white/80"
          : "bg-white"
      )}
    >
      <div className="flex h-16 py-10 items-center justify-between container mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="grow ">
          <Image
            src="/logo-navbar.avif"
            alt="NTT Logo"
            height={1500}
            width={1500}
            className="h-18 w-auto object-contain"
          />
        </Link>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-5 w-5 cursor-pointer text-black" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white text-accent"
          >
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <Accordion type="single" collapsible className="mt-6">
                <EachUtils
                  of={LIST_NAVBAR}
                  render={(item) => {
                    if (!item.opt) {
                      return (
                        <Link
                          href={item.url}
                          className="block text-sm font-medium py-4 hover:underline cursor-default"
                        >
                          {item.title}
                        </Link>
                      );
                    } else {
                      return (
                        <AccordionItem value="why-attend">
                          <AccordionTrigger>{item.title}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2">
                              <EachUtils
                                of={item.opt}
                                render={(item) => (
                                  <Link
                                    href={item.url}
                                    key={item.url}
                                    className="py-2"
                                  >
                                    {item.title}
                                  </Link>
                                )}
                              />
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    }
                  }}
                />
              </Accordion>
              <div className="mt-6 space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Partner with us
                </Button>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex lg:gap-4">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-center flex-1">
            <NavigationMenu className="justify-center">
              <NavigationMenuList>
                <EachUtils
                  of={LIST_NAVBAR}
                  render={(item) => {
                    if (!item.opt) {
                      return (
                        <NavigationMenuItem key={item.title}>
                          <Link href={item.url} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              {item.title}
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      );
                    } else {
                      return (
                        <NavigationMenuItem key={item.title}>
                          <NavigationMenuTrigger>
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="origin-top-left left-0">
                            <ul className="grid w-[200px] gap-3 p-4">
                              <EachUtils
                                of={item.opt}
                                render={(item) => {
                                  return (
                                    <ListItem
                                      href={item.url}
                                      title={item.title}
                                      key={item.url}
                                    />
                                  );
                                }}
                              />
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    }
                  }}
                />
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button className={"max-xl:hidden"}>Partner with us</Button>
            <Button variant="outline">Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline hover:bg-primary hover:text-accent text-accent",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
