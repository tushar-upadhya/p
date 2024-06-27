import SectionTitle from "../common/SectionTitle";
import JobCard from "./JobCard";

const Network = () => {
  return (
    <div className="mt-32 mx-auto mq450:mt-12 mq450:text-base">
      <SectionTitle
        titleParts={[
          { text: "Explore", color: "text-white" },
          { text: " by ", color: "text-white" },
          { text: "Category", color: "text-springgreen-100" },
        ]}
        className="mq450:text-center mq450:text-7xl ml-2"
      />
      <div className="grid grid-cols-4 mq450:grid-cols-1 mq750:grid-cols-2 lg:grid-cols-4 mq1050:grid-cols-3  gap-5 mt-12 w-full">
        <JobCard
          maskGroup="/assets/design.png"
          title="Design"
          jobsAvailable={235}
        />
        <JobCard
          maskGroup="/assets/analyst.png"
          title="Analyst"
          jobsAvailable={235}
          propMinWidth="5.25rem"
        />
        <JobCard
          maskGroup="/assets/electrician.png"
          title="Electrician"
          jobsAvailable={235}
          propMinWidth="7.063rem"
        />
        <JobCard
          maskGroup="/assets/finance.png"
          title="Finance"
          jobsAvailable={235}
        />
        <JobCard
          maskGroup="/assets/Technology.png"
          title="Technology"
          jobsAvailable={235}
        />
        <JobCard
          maskGroup="/assets/programmer.png"
          title="Engineering"
          jobsAvailable={235}
        />
        <JobCard
          maskGroup="/assets/marketing.png"
          title="Marketing"
          jobsAvailable={235}
          propMinWidth="6.938rem"
        />
        <JobCard
          maskGroup="/assets/programmer.png"
          title="Programmer"
          jobsAvailable={235}
        />
      </div>
    </div>
  );
};

export default Network;
