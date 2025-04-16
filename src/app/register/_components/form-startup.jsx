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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  jobtitle: z.string().min(2).max(50),
  startupname: z.string().min(2).max(50),
  website: z.string().refine((val) => val.toLowerCase().includes("www."), {
    message: "Website must include 'www'",
  }),
  phone: z
    .string()
    .regex(/^[0-9+()-]*$/, "Phone number can only contain numbers and +()-")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .refine((val) => val.startsWith("+") || val.startsWith("0"), {
      message: "Phone number must start with + or 0",
    }),
  country: z.string().min(2).max(50),
  collaborate: z.string().min(2).max(50),
});

export default function FormStartup() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      jobtitle: "",
      startupname: "",
      website: "",
      phone: "+62",
      country: "",
      collaborate: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex max-sm:flex-col w-full gap-4">
          <FormField
            control={form.control}
            name="firstname"
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
            name="lastname"
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
          name="email"
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
          name="jobtitle"
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
          name="startupname"
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
          render={({ field }) => (
            <FormItem className={"w-full py-4"}>
              <FormLabel>
                wich corporate entity would you like to collaborate with?{" "}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={"w-full"}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
