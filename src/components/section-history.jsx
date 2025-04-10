import { HISTORY_CONTENT, HISTORY_LIST } from "@/constant/history-content";
import EachUtils from "@/utils/eachUtils";

export function HistorySection() {
  return (
    <section className="text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-2xl">
            <EachUtils
              of={HISTORY_CONTENT}
              render={(item, index) => (
                <p key={index} className="text-xl md:text-2xl leading-relaxed">
                  {item}
                </p>
              )}
            />
          </div>

          <div className="space-y-8">
            <div className="text-center lg:text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                History of
                <br />
                NTT Startup Challenge
              </h2>
              <div className="h-1 w-24 bg-blue-500 max-lg:mx-auto lg:ml-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <EachUtils
                of={HISTORY_LIST}
                render={(item, index) => (
                  <div key={index} className="bg-[#0A1428] rounded-lg p-6">
                    <p className="text-blue-400 text-xl mb-2">{item.title}</p>
                    <p className="text-5xl font-bold">{item.number}</p>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
