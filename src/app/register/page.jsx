"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeadingText from "@/components/heading-text";
import InitialPage from "@/components/pages/initial-page";
import FormStartup from "./_components/form-startup";
import FormPartner from "./_components/form-partner";
import { useSearchParams } from "next/navigation";

function RegisterPage() {
  const params = useSearchParams();
  const [activeTab, setActiveTab] = useState("startup");

  const type = params.get("type");

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

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
                    <FormPartner />
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
