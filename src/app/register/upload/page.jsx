"use client";
import InitialPage from "@/components/pages/initial-page";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email_address: z.string().email(),
  file_proposal: z.custom((file) => {
    if (!file) return false;
    return file.size <= 50 * 1024 * 1024;
  }, "File size must be less than 50MB"),
});

function UploadForm() {
  const searchParams = useSearchParams();
  const defaultEmail = searchParams.get("email") || "";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email_address: defaultEmail,
      file_proposal: null,
    },
    mode: "onSubmit",
  });

  const [isSuccess, setIsSuccess] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("email_address", data.email_address);
      formData.append("file_proposal", data.file_proposal);

      const res = await fetch("/api/send-file-proposal", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setIsSuccess("success");
      } else {
        setIsSuccess("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setIsSuccess("error");
    } finally {
      form.reset();
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = "";
      }
      setIsLoading(false);
      setTimeout(() => {
        setIsSuccess("");
      }, 5000);
    }
  };

  return (
    <section className="pt-16 md:pt-28 container mx-auto px-4 space-y-8">
      {isSuccess == "success" && (
        <Alert>
          <AlertDescription>
            Thank you! Your submission has been received!
          </AlertDescription>
        </Alert>
      )}
      {isSuccess == "error" && (
        <Alert variant={"destructive"}>
          <AlertDescription>
            Email not found, please check your email again
          </AlertDescription>
        </Alert>
      )}
      <h1 className=" font-extrabold tracking-wide uppercase  leading-tight sm:text-3xl md:text-4xl lg:text-6xl">
        Upload Proposal NTT Partner
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email_address"
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormLabel>
                  Email <sup className="text-red-500 text-lg -ml-1">*</sup>
                </FormLabel>
                <FormControl>
                  <Input {...field} disabled={!!defaultEmail} />
                </FormControl>
                <FormDescription>
                  Harap memastikan bahwa email yang dikirim sesuai dengan email
                  yang telah terdaftar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file_proposal"
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormLabel>
                  File <sup className="text-red-500 text-lg -ml-1">*</sup>
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      form.setValue("file_proposal", e.target.files?.[0]);
                    }}
                  />
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
    </section>
  );
}

export default function UploadFileRegisterPage() {
  return (
    <InitialPage>
      <Suspense fallback={<div>Loading...</div>}>
        <UploadForm />
      </Suspense>
    </InitialPage>
  );
}
