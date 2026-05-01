"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Loader2, HelpCircle } from "lucide-react";

const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email_address: z.string().trim().email(),
  job_title: z.string().min(2).max(50),
  startup_name: z.string().min(2).max(50),
  website: z.string(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .refine((val) => val.startsWith("+") || val.startsWith("0"), {
      message: "Phone number must start with + or 0",
    }),
  country: z.string().min(2).max(50),
  collaborate: z
    .array(z.string())
    .min(1, "Select at least one option")
    .max(3, "You may choose a maximum of 3."),
  how_did_you_hear: z.string(),
});

const ENTITY_DESCRIPTIONS = {
  "NTT Holdings (Organizer)":
    "Acts as the group-level organiser overseeing all B2B and B2C services, coordinating strategy and collaboration across all NTT Group companies globally, including SI, data centre, and new business domains.",
  "NTT Data Japan (Domestic SI & DX Services, Finance & Marketing":
    "Delivers system integration and digital transformation services for public and private sector clients in the Japan market.",
  "NTT Data Global (Global IT Services & SI, Data center)":
    "Provides global-scale IT services and system integration, supporting multinational enterprises with end-to-end digital solutions.",
  "NTT East (Telecom East area of Japan, Aquaculture, Digital art, Healthcare":
    "Provides regional ICT and telecommunications services in Eastern Japan, addressing social and community challenges through digital solutions.",
  "NTT West (Telecom West area of Japan, Digital entertainment":
    "Delivers ICT and telecommunications services across Western Japan, driving regional innovation and social value creation",
  "NTT Field Techno (AI Road surface inspection)":
    "Delivers B2B AI-enabled road infrastructure maintenance, working through SI-led operations for customers through digital transformation.",
  "NTT Docomo (B2C, Consumer Mobile & Digital Services":
    "Leads B2C mobile communications and digital services in Japan, expanding into smart life, payments, and digital platforms.",
  "NTT Docomo Global (New Biz Dev in Asia for Docomo)":
    "Drives B2B/C new business development across Asia in the global market, partnering with local ecosystems",
  "NTT Docomo Business (B2B, Enterprise DX & ICT Solutions)":
    "Offers B2B ICT and digital transformation solutions, integrating networks, cloud, and applications to support enterprise customers.",
  "NTT Com Asia (Hong Kong Area)":
    "Supports B2B customers mainly in Hong Kong, delivering SI-based solutions connected to data centre and IT services.",
  "NTT Advanced Technology (New technology development)":
    "Commercializes advanced technologies from NTT's R&D, providing products, solutions, and professional services to global markets.",
  "NTT Urban Development (Real Estate)":
    "Develops real estate and urban solutions for the global market, collaborating with local partners.",
  "NTT Anode Energy (Energy)":
    "Advances B2B energy solutions in the Japan and global market, working with SI partners and data centre operators to modernise infrastructure.",
  "Synexia Ventures (CVC)":
    "NTT's dedicated fund for Asia invests in early- to mid-stage startups, enabling B2B co-creation in the global market",
  "NTT Docomo Ventures (CVC)":
    "With a strong focus on Southeast Asia, drives B2B/C innovation in the global market by investing in startups enabling co-creation with NTT Group businesses.",
  "NTT Finance(CVC)":
    "With a strong focus on Southeast Asia, NTT Finance supports B2B innovation in the global market.",
};

export default function FormStartup() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email_address: "",
      job_title: "",
      startup_name: "",
      website: "",
      phone: "",
      country: "",
      collaborate: [],
      how_did_you_hear: "",
    },
    mode: "onSubmit",
  });
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [ventureCapital, setVentureCapital] = React.useState("");

  const howDidYouHear = useWatch({
    control: form.control,
    name: "how_did_you_hear",
  });

  async function onSubmit(values) {
    setIsLoading(true);

    const formattedValues = {
      ...values,
      collaborate: Array.isArray(values.collaborate)
        ? values.collaborate.join(", ")
        : values.collaborate,
    };

    try {
      const res = await fetch("/api/send-startup", {
        method: "POST",
        body: JSON.stringify(formattedValues),
      });

      const result = await res.json();
      if (result.success) {
        form.reset();
        setIsSuccess(true);
        scrollTo(0, 0);
        setTimeout(() => setIsSuccess(false), 10000);
      }
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {isSuccess && (
          <Alert>
            <AlertDescription>
              Thank you! Your registration was successful. Please check your
              email for guidance on submitting your pitch deck.
            </AlertDescription>
          </Alert>
        )}
        <p>
          Any startup companies operating business in ASIA and Oceania can
          apply. Please note that startup must be legal entity not just an idea.
        </p>
        <div className="flex max-sm:flex-col w-full gap-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormLabel>
                  First Name <sup className="text-red-500 text-lg -ml-1">*</sup>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormLabel>
                  Last Name <sup className="text-red-500 text-lg -ml-1">*</sup>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormLabel>
                Phone <sup className="text-red-500 text-lg -ml-1">*</sup>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email_address"
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormLabel>
                Email <sup className="text-red-500 text-lg -ml-1">*</sup>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="job_title"
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormLabel>
                Job Title <sup className="text-red-500 text-lg -ml-1">*</sup>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startup_name"
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormLabel>
                Startup Name <sup className="text-red-500 text-lg -ml-1">*</sup>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormLabel>
                Country <sup className="text-red-500 text-lg -ml-1">*</sup>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="collaborate"
          render={() => (
            <FormItem className="w-full pt-4">
              <FormLabel>
                Which corporate entity would you like to collaborate with?
              </FormLabel>
              <div className="gap-6 space-y-2">
                {[
                  "NTT Holdings (Organizer)",
                  "NTT Data Japan (Domestic SI & DX Services, Finance & Marketing",
                  "NTT Data Global (Global IT Services & SI, Data center)",
                  "NTT East (Telecom East area of Japan, Aquaculture, Digital art, Healthcare",
                  "NTT West (Telecom West area of Japan, Digital entertainment",
                  "NTT Field Techno (AI Road surface inspection)",
                  "NTT Docomo (B2C, Consumer Mobile & Digital Services",
                  "NTT Docomo Global (New Biz Dev in Asia for Docomo)",
                  "NTT Docomo Business (B2B, Enterprise DX & ICT Solutions)",
                  "NTT Com Asia (Hong Kong Area)",
                  "NTT Advanced Technology (New technology development)",
                  "NTT Urban Development (Real Estate)",
                  "NTT Anode Energy (Energy)",
                  "Synexia Ventures (CVC)",
                  "NTT Docomo Ventures (CVC)",
                  "NTT Finance(CVC)",
                ].map((entity) => (
                  <FormField
                    key={entity}
                    control={form.control}
                    name="collaborate"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={entity}
                          className="flex flex-row items-center space-x-1 space-y-0 break-inside-avoid"
                        >
                          <FormControl>
                            <input
                              type="checkbox"
                              value={entity}
                              checked={field.value?.includes(entity)}
                              onChange={(e) => {
                                const isChecked = e.target.checked;
                                if (isChecked) {
                                  field.onChange([...field.value, entity]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (item) => item !== entity,
                                    ),
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <div className="flex items-center gap-1 group relative py-2">
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {entity}
                            </FormLabel>
                            <div className="relative inline-block">
                              <HelpCircle className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors cursor-help" />
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 ml-2 w-72 p-4 bg-gray-900 text-white text-xs leading-relaxed rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="relative">
                                  {ENTITY_DESCRIPTIONS[entity]}
                                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="how_did_you_hear"
          render={({ field }) => (
            <FormItem className={"w-full pt-4"}>
              <FormLabel>How did you hear about us?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="NTT Website">NTT Website</SelectItem>
                  <SelectItem value="Direct Email Invitation">
                    Direct Email Invitation
                  </SelectItem>
                  <SelectItem
                    value="NTT Personel/Event
"
                  >
                    NTT Personel/Event
                  </SelectItem>
                  <SelectItem value="Venture Capital">
                    Venture Capital
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        {(howDidYouHear === "Venture Capital" || howDidYouHear === "Other") && (
          <div className="pb-4">
            <Label className="my-2 text-sm text-gray-200">
              {howDidYouHear === "Venture Capital"
                ? "Please specify the Venture Capital name"
                : "Please specify other source of information"}
            </Label>
            <div className="flex items-center gap-2">
              <Input
                className="w-full"
                placeholder={
                  howDidYouHear === "Venture Capital"
                    ? "Venture Capital"
                    : "Other"
                }
                onChange={(e) => setVentureCapital(e.target.value)}
              />
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => {
                  form.setValue(
                    "how_did_you_hear",
                    howDidYouHear === "Venture Capital"
                      ? `Venture Capital: ${ventureCapital}`
                      : `Other: ${ventureCapital}`,
                  );
                  setVentureCapital("");
                }}
              >
                {howDidYouHear === "Venture Capital"
                  ? " Venture Capital"
                  : " Other"}
              </Button>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin h-4 w-4" /> Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
