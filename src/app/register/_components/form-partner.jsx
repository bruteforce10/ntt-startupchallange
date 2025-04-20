"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email_address: z.string().email(),
  job_title: z.string().min(2).max(50),
  company_name: z.string().min(2).max(50),
  website: z.string(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .refine((val) => val.startsWith("+") || val.startsWith("0"), {
      message: "Phone number must start with + or 0",
    }),
});

export default function FormPartner() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email_address: "",
      job_title: "",
      company_name: "",
      website: "",
      phone: "",
    },
    mode: "onSubmit",
  });
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-partner", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const result = await res.json();
      if (result.success) {
        form.reset();
        setIsSuccess(true);
        scrollTo(0, 0);
        setTimeout(() => setIsSuccess(false), 5000);
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
              Thank you! Your submission has been received!
            </AlertDescription>
          </Alert>
        )}
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
          name="company_name"
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormLabel>
                Company Name <sup className="text-red-500 text-lg -ml-1">*</sup>
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
          name="website"
          render={({ field }) => (
            <FormItem className={"w-full mb-10"}>
              <FormLabel>
                Website <sup className="text-red-500 text-lg -ml-1">*</sup>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
