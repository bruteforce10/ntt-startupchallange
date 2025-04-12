import { HISTORY_CONTENT, HISTORY_LIST } from "@/constant/history-content";
import EachUtils from "@/utils/eachUtils";
import HeadingText from "./heading-text";

export function HistorySectionNew() {
  return (
    <section className="text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText
          text={<>History of NTT Startup Challenge</>}
          className={"mb-12"}
        />
        <div className="grid grid-cols-1   gap-12 items-start">
          <EachUtils
            of={HISTORY_CONTENT}
            render={(item, index) => (
              <p
                key={index}
                className="text-xl md:text-2xl text-center leading-relaxed"
              >
                {item}
              </p>
            )}
          />

          <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
            <EachUtils
              of={HISTORY_LIST}
              render={(item, index) => (
                <div
                  key={index}
                  className="bg-[#0A1428] text-center rounded-lg p-6"
                >
                  <p className="text-blue-400 text-xl mb-2">{item.title}</p>
                  <p className="text-5xl font-bold">{item.number}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
