"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LIST_NAVBAR } from "@/constant/listNavbar";
import EachUtils from "@/utils/eachUtils";

const NAVBAR_ACTIONS = [
  {
    title: "Contact Us",
    href: "https://wa.me/6281130804004?text=Hello%20NTT%20Startup%20Challenge%2C%20I%20am%20interested%20in%20contacting%20you.%20Please%20let%20me%20know%20how%20we%20can%20connect.",
  },
  {
    title: "Partner With Us",
    href: "/register?type=partner",
  },
  {
    title: "Subscribe to Our Newsletter",
    href: "mailto:info@ntt-startupchallenge.com?subject=Newsletter%20Subscription",
  },
  {
    title: "Register",
    href: "/register?type=startup",
    external: true,
    disabled: true,
    badge: "coming soon",
  },
];

const PRIMARY_ACTION = NAVBAR_ACTIONS[3];
const SECONDARY_ACTIONS = [
  NAVBAR_ACTIONS[0],
  NAVBAR_ACTIONS[1],
  NAVBAR_ACTIONS[2],
];

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
          : "bg-white",
      )}
    >
      <div className="flex h-16 py-10 items-center justify-between container mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="grow ">
          <Image
            src="/logo-navbar.webp"
            alt="NTT Logo"
            height={1500}
            width={1500}
            className="h-28 w-auto object-contain"
          />
        </Link>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden h-11 w-11 rounded-full border border-blue-ntt/15 bg-white text-blue-ntt shadow-sm hover:bg-blue-ntt/6"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[320px] max-w-[calc(100vw-1rem)] overscroll-y-contain border-l border-blue-ntt/10 bg-white text-accent sm:w-[400px]"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-lg text-blue-ntt-700">
                Navigation
              </SheetTitle>
              <SheetDescription className="text-left text-sm leading-6 text-slate-600">
                Explore NTT Startup Challenge pages and take the next step from
                here.
              </SheetDescription>
              <Accordion type="single" collapsible className="mt-6">
                <EachUtils
                  of={LIST_NAVBAR}
                  render={(item) => {
                    if (!item.opt) {
                      return (
                        <Link
                          key={item.title}
                          href={item.url}
                          className="block rounded-2xl px-3 py-4 text-sm font-medium text-slate-800 transition-colors hover:bg-blue-ntt/5 hover:text-blue-ntt"
                        >
                          {item.title}
                        </Link>
                      );
                    } else {
                      return (
                        <AccordionItem
                          key={item.title}
                          value={item.title.toLowerCase().replace(/\s+/g, "-")}
                        >
                          <AccordionTrigger>{item.title}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2">
                              <EachUtils
                                of={item.opt}
                                render={(item) => (
                                  <Link
                                    href={item.url}
                                    key={item.url}
                                    className="rounded-xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-ntt/5 hover:text-blue-ntt"
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
              <div className="mt-8 w-full">
                <MobileNavbarActions />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="hidden xl:flex xl:gap-6">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-center flex-1">
            <NavigationMenu className="justify-center" viewport={false}>
              <NavigationMenuList>
                <EachUtils
                  of={LIST_NAVBAR}
                  render={(item) => {
                    if (!item.opt) {
                      return (
                        <NavigationMenuItem key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.url}
                              className={navigationMenuTriggerStyle()}
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    } else {
                      return (
                        <NavigationMenuItem key={item.title}>
                          <NavigationMenuTrigger>
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
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
          <div className="flex items-center">
            <DesktopNavbarActions />
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopNavbarActions() {
  return (
    <div className="flex items-center gap-3">
      <NavbarActionButton
        {...PRIMARY_ACTION}
        className="min-h-11 min-w-[10rem] rounded-2xl border border-blue-ntt bg-blue-ntt px-5 py-3 text-[0.95rem] font-semibold text-white shadow-[0_18px_40px_rgba(37,111,184,0.26)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1c5f9f] motion-reduce:hover:translate-y-0"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="min-h-11 rounded-2xl border-blue-ntt/20 bg-white px-4 py-3 text-[0.95rem] font-semibold text-slate-800 shadow-[0_10px_28px_rgba(8,41,71,0.08)] transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-blue-ntt/40 hover:bg-blue-ntt/5 hover:text-blue-ntt"
          >
            More
            <ChevronDown className="size-4" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[19rem] rounded-3xl border border-blue-ntt/10 bg-white/98 p-2 shadow-[0_24px_60px_rgba(8,41,71,0.14)]"
        >
          <DropdownMenuLabel className="px-3 pt-3 pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-blue-ntt-700">
            More Ways to Connect
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="mx-3 bg-blue-ntt/10" />
          {SECONDARY_ACTIONS.map((action) => (
            <DropdownMenuItem
              key={action.title}
              asChild
              className="group mt-1 cursor-pointer rounded-2xl p-0 focus:bg-transparent"
            >
              <a
                href={action.href}
                {...getActionProps(action)}
                className="block rounded-2xl px-4 py-3 transition-[background-color,color,box-shadow] duration-200 hover:bg-blue-ntt/5 focus-visible:bg-blue-ntt/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ntt/25"
              >
                <span className="block text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-ntt">
                  {action.title}
                </span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function MobileNavbarActions() {
  return (
    <div className="flex flex-col gap-3">
      <NavbarActionButton
        {...PRIMARY_ACTION}
        mobile
        className="min-h-12 w-full rounded-2xl border border-blue-ntt bg-blue-ntt px-5 py-3 text-base font-semibold text-white shadow-[0_18px_40px_rgba(37,111,184,0.22)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-[#1c5f9f]"
      />
      <NavbarActionButton
        {...SECONDARY_ACTIONS[0]}
        mobile
        className="min-h-12 w-full rounded-2xl border border-blue-ntt/25 bg-blue-ntt/5 px-5 py-3 text-base font-semibold text-blue-ntt transition-colors duration-200 hover:bg-blue-ntt/10"
      />
      <a
        href={SECONDARY_ACTIONS[1].href}
        className="rounded-xl px-1 py-2 text-sm font-medium text-slate-600 underline-offset-4 transition-colors hover:text-blue-ntt hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ntt/25"
      >
        {SECONDARY_ACTIONS[1].title}
      </a>
    </div>
  );
}

function NavbarActionButton({
  title,
  href,
  className,
  external = false,
  mobile = false,
  disabled = false,
  badge,
}) {
  const content = (
    <>
      <span className="text-balance">{title}</span>
      {badge ? (
        <span className="text-[0.45rem] font-medium uppercase tracking-[0.18em] opacity-90">
          {badge}
        </span>
      ) : null}
    </>
  );

  return (
    <Button
      asChild
      className={cn(
        "touch-manipulation whitespace-normal text-center leading-tight",
        badge && "h-auto flex-col gap-1",
        mobile ? "w-full justify-center" : "justify-center",
        className,
      )}
    >
      {disabled ? (
        <span aria-disabled="true" className="cursor-default">
          {content}
        </span>
      ) : (
        <a href={href} {...getActionProps({ href, external })}>
          {content}
        </a>
      )}
    </Button>
  );
}

function getActionProps(action) {
  const isMailto = action.href.startsWith("mailto:");

  if (action.external || isMailto) {
    return {
      target: isMailto ? undefined : "_blank",
      rel: isMailto ? undefined : "noreferrer",
    };
  }

  return {};
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline text-slate-900 transition-colors hover:bg-gray-200",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
