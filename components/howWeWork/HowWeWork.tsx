import SectionTitle from "../common/SectionTitle";
import TextBlock from "../common/TextBlock";
import WorkStep from "./WorkStep";

const HowWeWork = () => {
  return (
    <div className="flex flex-row mt-24 items-center justify-center py-0 pr-5 pl-0 box-border gap-[55px] max-w-full  text-left text-lg text-white font-label-01 mq1050:flex-wrap">
      <div className="container mx-auto mb-8">
        <SectionTitle
          titleParts={[
            { text: " How ", color: "text-white" },
            { text: " we ", color: "text-white" },
            { text: " work ", color: "text-white" },
          ]}
          className="mq450:text-center mq450:text-7xl"
        />

        <TextBlock text="Transformative careers through meaningful work experiences. Explore internships and careers." />

        {/* <GetInTouch /> */}
      </div>

      <div className="grid grid-cols-2 gap-5 mq1050:grid-cols-2 mq1050:justify-center w-full">
        <WorkStep number={1} title="Personalized Approach" />
        <WorkStep number={2} title="Professional Development" />
        <WorkStep number={3} title="Transparent Communication" />
        <WorkStep number={4} title="Continuous Support" />
      </div>
    </div>
  );
};

export default HowWeWork;
