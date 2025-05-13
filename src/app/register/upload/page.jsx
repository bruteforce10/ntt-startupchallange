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
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  email_address: z.string().email(),
  file_proposal: z.custom((file) => {
    if (!file) return false;
    return file.size <= 150 * 1024 * 1024;
  }, "File size must be less than 150MB"),
});

function UploadForm() {
  const searchParams = useSearchParams();
  const defaultEmail = searchParams.get("email") || "";
  const router = useRouter();

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
  const [isLoadingLink, setIsLoadingLink] = React.useState(false);
  const [link_url, setLinkUrl] = React.useState("");

  const onSubmitLink = async () => {
    try {
      setIsLoadingLink(true);
      const formData = new FormData();
      formData.append("opt_link_file_proposal", link_url);
      formData.append("email_address", defaultEmail);

      await fetch("/api/send-file-link-proposal", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      setIsSuccess("error");
      console.error("Upload error:", error);
    } finally {
      setIsLoadingLink(false);
      setIsSuccess("success");
      setTimeout(() => window.location.reload(), 3000);
    }
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const email = data.email_address;
      const file = data.file_proposal;

      if (!defaultEmail) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("email", email);

        const decodedEmail = decodeURIComponent(email);
        form.setValue("email_address", email);
        router.push(`/register/upload?email=${decodedEmail}`);
      }

      const res = await fetch(
        `https://pb.ntt-startupchallenge.com/api/collections/data_startup/records?filter=(email_address="${email}")`
      );
      const list = await res.json();
      const matchedRecord = list?.items?.[0];

      if (!matchedRecord) {
        setIsSuccess("error");
        return;
      }

      const recordId = matchedRecord.id;

      const formData = new FormData();
      formData.append("file_proposal", file);

      const updateRes = await fetch(
        `https://pb.ntt-startupchallenge.com/api/collections/data_startup/records/${recordId}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (updateRes.ok) {
        setIsSuccess("success");
      } else {
        setIsSuccess("error");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setIsSuccess("error");
    } finally {
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = "";
      }
      setIsLoading(false);
      setTimeout(() => setIsSuccess(""), 5000);
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
        NSC 2025 DECK SUBMISSION
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
                  Please make sure that the email above is the same as the one
                  you used to register
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

          {isLoading && (
            <div className="space-y-1 opacity-75 text-sm">
              <p>Please ensure your internet connection is stable.</p>
              <p className="sm:max-w-2xl leading-loose">
                Please wait approximately 10 to 15 minutes, depending on the
                size of the file you are uploading. <br /> If it takes too long,
                you may upload it via a direct link (google drive, onedrive,
                etc) instead.
                <Dialog>
                  <DialogTrigger>
                    <span className="underline cursor-pointer ml-1 hover:text-blue-ntt/80 text-white">
                      Click Here
                    </span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Sumbit link directly</DialogTitle>
                    </DialogHeader>
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
                    <Input
                      value={link_url}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      type="text"
                      placeholder="link here"
                    />
                    <Button onClick={onSubmitLink} disabled={isLoadingLink}>
                      Submit
                    </Button>
                  </DialogContent>
                </Dialog>
              </p>
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
