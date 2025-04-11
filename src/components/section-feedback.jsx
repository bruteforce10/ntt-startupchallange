import { FEEDBACK_CONTENT } from "@/constant/feedback-content";
import EachUtils from "@/utils/eachUtils";
import FeedbackCard from "./feedback-card";

export function FeedbackSection() {
  return (
    <section className=" text-white py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  items-center gap-16 lg:gap-24">
          <EachUtils
            of={FEEDBACK_CONTENT}
            render={(item, index) => (
              <FeedbackCard
                key={item.img}
                index={index}
                img={item.img}
                desc={item.desc}
                title={item.title}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}
