"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import HeadingText from "@/components/heading-text";
import InitialPage from "@/components/pages/initial-page";
import FormStartup from "./_components/form-startup";

function RegisterPage() {
  const [activeTab, setActiveTab] = useState("startup");

  return (
    <InitialPage>
      <section className="pt-16 md:pt-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/2 lg:pt-8">
              <HeadingText
                text={"Register"}
                className={"lg:text-start mb-8"}
                classNameBorder={"lg:mx-0"}
              />
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Presented by NTT, a global leader in IT and telecommunications
                with over 150 years of innovation. Explore our diverse
                portfolio, benefit from strategic business support and extensive
                networking opportunities. Register now to connect and
                collaborate across industries!
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-[#0A1428] rounded-3xl p-6 md:p-8">
                <Tabs
                  defaultValue="audience"
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-2 bg-transparent w-full mb-8">
                    <TabsTrigger
                      value="startup"
                      className=" data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg text-gray-400"
                    >
                      Startup
                    </TabsTrigger>
                    <TabsTrigger
                      value="partner"
                      className="w-full data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg text-gray-400"
                    >
                      Partner
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="startup">
                    <FormStartup />
                  </TabsContent>

                  {/* Partner Registration Form */}
                  <TabsContent value="partner">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="partner-first-name"
                            className="text-white"
                          >
                            First Name
                          </Label>
                          <Input
                            id="partner-first-name"
                            required
                            className="bg-white text-black"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="partner-last-name"
                            className="text-white"
                          >
                            Last Name
                          </Label>
                          <Input
                            id="partner-last-name"
                            required
                            className="bg-white text-black"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-phone" className="text-white">
                          Phone
                        </Label>
                        <Input
                          id="partner-phone"
                          type="tel"
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-email" className="text-white">
                          Email Address
                        </Label>
                        <Input
                          id="partner-email"
                          type="email"
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-company" className="text-white">
                          Company Name
                        </Label>
                        <Input
                          id="partner-company"
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-website" className="text-white">
                          Website
                        </Label>
                        <Input
                          id="partner-website"
                          type="url"
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-type" className="text-white">
                          Partnership Type
                        </Label>
                        <select
                          id="partner-type"
                          required
                          className="w-full h-10 px-3 py-2 bg-white text-black rounded-md"
                        >
                          <option value="">Select partnership type</option>
                          <option value="sponsor">Sponsor</option>
                          <option value="exhibitor">Exhibitor</option>
                          <option value="media">Media Partner</option>
                          <option value="community">Community Partner</option>
                        </select>
                      </div>

                      <Button type="submit" className="w-full">
                        Submit
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InitialPage>
  );
}

export default RegisterPage;
