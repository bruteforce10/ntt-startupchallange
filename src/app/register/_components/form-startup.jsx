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
import { Loader2 } from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";

const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email_address: z.string().email(),
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
          Any startup companies operating business in ASIA can apply. Please
          note that startup must be legal entity not just an idea.
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
              <div className="grid grid-cols-2 gap-2">
                {[
                  "All entity",
                  "NTT Docomo Ventures",
                  "NTT East",
                  "NTT West",
                  "NTT Finance",
                  "NTT Communications",
                  "NTT Docomo",
                  "NTT AT",
                  "NTT Data",
                  "Nippon Information and Communication Corporation (NI+C)",
                  "NTT Precision Medicine",
                  "NTT Anode Energy",
                  "NTT Docomo Solutions",
                ].map((entity) => (
                  <FormField
                    key={entity}
                    control={form.control}
                    name="collaborate"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={entity}
                          className="flex flex-row items-center space-x-1 space-y-0"
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
                                      (item) => item !== entity
                                    )
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {entity}
                          </FormLabel>
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

        {(howDidYouHear === "Venture Capital" || "other") && (
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
                variant={"secondary"}
                onClick={() => {
                  form.setValue(
                    "how_did_you_hear",
                    howDidYouHear === "Venture Capital"
                      ? `Venture Capital: ${ventureCapital}`
                      : `Other: ${ventureCapital}`
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
