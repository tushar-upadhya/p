import React, { useMemo, CSSProperties } from "react";
import type { NextPage } from "next";

export type JobCardProps = {
  className?: string;
  maskGroup: string;
  title: string;
  jobsAvailable: number;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const JobCard: NextPage<JobCardProps> = ({
  className = "",
  maskGroup,
  title,
  jobsAvailable,
  propMinWidth,
  propDisplay,
}) => {
  const titleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div
      className={`w-[18rem] rounded-3xs box-border text-white flex flex-row items-center justify-center py-[2.25rem] px-[1.5rem] gap-[1rem] text-left text-[1.5rem] text-gray-100 font-nunito-sans border-[1px] border-solid border-white ${className} hover:border-springgreen-100 hover:text-springgreen-100 transition-all duration-300 `}
    >
      <div className="flex flex-col items-center justify-center pt-[0.625rem] px-[0rem] pb-[0rem]">
        <div className="relative w-[3rem] h-[3rem] overflow-hidden">
          <img
            className="absolute w-full h-full object-cover"
            alt=""
            src={maskGroup}
          />
          <img
            className="absolute inset-0 w-full h-full object-cover "
            alt=""
            src={maskGroup}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.25rem]">
        <h3
          className="m-0 relative text-inherit leading-[1.813rem] font-semibold font-inherit inline-block z-[1] mq450:text-[1.188rem] mq450:leading-[1.438rem]"
          style={titleStyle}
        >
          {title}
        </h3>
        <div className="relative text-[1rem] leading-[120%] z-[1]">
          {jobsAvailable} Jobs Available
        </div>
      </div>
      <div className="h-[9rem] w-[18rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-white" />
    </div>
  );
};

export default JobCard;
