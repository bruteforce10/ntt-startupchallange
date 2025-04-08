import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] container px-4 mx-auto  flex-col items-start justify-center space-y-4 "> 
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-6xl py-4">
        Build Connections That Matter – Your Next Leap Starts at NTT Startup Challenge
        </h1>
    
      <div className="flex gap-4">
        <Button size="lg">
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Schedule a Demo
        </Button>
      </div>
    </section>
  )
}
