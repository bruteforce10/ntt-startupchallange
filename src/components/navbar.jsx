"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
  

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-blue-ntt border-b-[4px] transition-all duration-200",
        scrolled ? "bg-white/80 backdrop-blur  supports-[backdrop-filter]:bg-white/80" : "bg-white",
      )}
    >
      <div className="flex h-16 py-10 items-center justify-between container mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="grow ">
            <Image src="/logo-navbar.avif" alt="NTT Logo" height={1500} width={1500} className="h-18 w-auto" />
        </Link>

        {/* Mobile Navigation */}
        <Sheet>
        <SheetTrigger className="lg:hidden">
              <Menu className="h-5 w-5 cursor-pointer text-black" />
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white text-accent">
            <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
            </SheetDescription>
            <Accordion type="single" collapsible className="mt-6">
                  <Link href="/" className="block text-sm font-medium py-4">
                    Home
                  </Link>
                  <div className="w-full h-[1px] bg-gray-400 opacity-25"></div>
                <AccordionItem value="why-attend">
                  <AccordionTrigger>Why Attend</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      <Link href="/why-attend/startup" className="py-2">
                        Startup
                      </Link>
                      <Link href="/why-attend/investor" className="py-2">
                        Investor
                      </Link>
                      <Link href="/why-attend/attendees" className="py-2">
                        Attendees
                      </Link>
                      <Link href="/why-attend/media" className="py-2">
                        Media
                      </Link>
                      <Link href="/why-attend/partners" className="py-2">
                        Partners
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="agenda">
                  <AccordionTrigger>Agenda</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      <Link href="/agenda/program" className="py-2">
                        Program
                      </Link>
                      <Link href="/agenda/partner" className="py-2">
                        Partner
                      </Link>
                      <Link href="/agenda/ntt-connect" className="py-2">
                        NTT Connect
                      </Link>
                      <Link href="/agenda/faq" className="py-2">
                        FAQ
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="about-ntt">
                  <AccordionTrigger>About NTT</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      <Link href="/about/group" className="py-2">
                        Group
                      </Link>
                      <Link href="/about/numbers" className="py-2">
                        Numbers
                      </Link>
                      <Link href="/about/open-innovation" className="py-2">
                        Open Innovation
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-6 space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Partner with us</Button>
                <Button variant="outline" className="w-full">
                  NTTSC
                </Button>
              </div>
            </SheetHeader>
        </SheetContent>
        </Sheet>



        <div className="hidden lg:flex gap-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-center flex-1">
          <NavigationMenu className="justify-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Why Attend</NavigationMenuTrigger>
                <NavigationMenuContent className="origin-top-left left-0">
                  <ul className="grid w-[200px] gap-3 p-4">
                    <ListItem href="/why-attend/startup" title="Startup" />
                    <ListItem href="/why-attend/investor" title="Investor" />
                    <ListItem href="/why-attend/attendees" title="Attendees" />
                    <ListItem href="/why-attend/media" title="Media" />
                    <ListItem href="/why-attend/partners" title="Partners" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Agenda</NavigationMenuTrigger>
                <NavigationMenuContent className="origin-top-left left-0">
                  <ul className="grid w-[200px] gap-3 p-4">
                    <ListItem href="/agenda/program" title="Program" />
                    <ListItem href="/agenda/partner" title="Partner" />
                    <ListItem href="/agenda/ntt-connect" title="NTT Connect" />
                    <ListItem href="/agenda/faq" title="FAQ" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About NTT</NavigationMenuTrigger>
                <NavigationMenuContent className="origin-top-left left-0">
                  <ul className="grid w-[200px] gap-3 p-4">
                    <ListItem href="/about/group" title="Group" />
                    <ListItem href="/about/numbers" title="Numbers" />
                    <ListItem href="/about/open-innovation" title="Open Innovation" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button>Partner with us</Button>
          <Button variant="outline">NTTSC</Button>
        </div>
        </div>
      </div>
    </header>
  )
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
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
