"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Hero = () => {
  const router = useRouter();

  const handleFilterJobs = (type: string) => {
    router.push(`/details?type=${type}`);
  };

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-53xl text-white font-nunito-sans">
      <div className="w-[1224px] flex flex-col items-start justify-start gap-[75px] max-w-full mq450:gap-[19px] mq750:gap-[37px]">
        <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[96px] min-w-[416px] max-w-full mq450:gap-[24px] mq750:gap-[48px] mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[80px] font-bold font-inherit mq450:text-24xl mq450:leading-[48px] mq1050:text-39xl mq1050:leading-[64px]">
                <span>{`Find A `}</span>
                <span className="text-springgreen-100">Job</span>
                <span>{` That `}</span>
                <span className="text-springgreen-100">Matches</span>
                <span> Your Passion</span>
              </h1>
              <div className="w-[567px] relative text-xl leading-[28px] inline-block max-w-full mq450:text-base mq450:leading-[22px]">
                Hand-picked opportunities to work from home, remotely,
                freelance, full-time, part-time, contract and internships.
              </div>
            </div>
            <div className="flex gap-4 mq450:gap-1">
              <Button
                className="px-16 mq450:px-10 mq450:py-2 mq750:px-14 mq750:py-8 py-8 text-xl hover:font-semibold hover:text-springgreen-100 hover:bg-springgreen-200 transition-all duration-200"
                onClick={() => handleFilterJobs("Full Time")}
              >
                Job
              </Button>
              <Button
                className="px-16 mq450:px-4  hover:text-springgreen-100 hover:bg-springgreen-200 transition-all duration-200  mq450:py-2 py-8 text-xl"
                onClick={() => handleFilterJobs("Internship")}
              >
                Internship
              </Button>
            </div>
          </div>

          <div className="w-[640px] flex flex-col items-start justify-end pt-0 px-0 pb-[23px] box-border min-w-[616px] max-w-full ml-[-40px] text-5xl text-black mq750:min-w-full mq1050:flex-1 mq1050:ml-0">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[195px]">
                <div className="self-stretch h-[200px] mb-2 rounded-xl custom-hover-effect bg-lightpink flex flex-col items-start justify-start py-[21px] pr-5 pl-[25px] box-border relative gap-[12px]">
                  <div className="w-[300px] h-[200px] relative rounded-xl bg-lightpink hidden z-[0]" />
                  <h3 className="m-0 relative text-inherit leading-[24px] font-bold font-inherit inline-block min-w-[63px] z-[1] mq450:text-lgi mq450:leading-[19px]">
                    Learn
                  </h3>
                  <div className="relative text-base leading-[16px] z-[1]">
                    Enhance Your Knowledge
                  </div>
                  <img
                    className="w-[159px] h-[159px] absolute !m-[0] right-[-9px] bottom-[-22px] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/assets/02.png"
                  />
                </div>

                <div className="self-stretch rounded-xl custom-hover-effect bg-plum flex flex-col items-end justify-start pt-6 pb-3.5 pr-7 pl-[25px] gap-[20px]">
                  <div className="w-[300px] h-[200px] relative rounded-xl bg-plum hidden" />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <h3 className="m-0 relative text-inherit leading-[24px] font-bold font-inherit inline-block min-w-[89px] z-[1] mq450:text-lgi mq450:leading-[19px]">
                        Practice
                      </h3>
                      <div className="relative text-base leading-[16px] z-[1]">
                        Daily Practice for Mastery
                      </div>
                    </div>
                  </div>

                  <img
                    className="relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/assets/vector.png"
                  />
                </div>
              </div>

              <div className="flex-[0.93] rounded-xl bg-darkseagreen flex flex-col items-start justify-start pt-[21px] pb-0 pr-0 pl-[21px] box-border gap-[87px] custom-hover-effect min-w-[195px] mq450:gap-[43px] mq450:flex-1">
                <div className="w-[300px] h-[416px] relative rounded-xl bg-darkseagreen hidden" />
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <h3 className="m-0 relative text-inherit leading-[24px] font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[19px]">
                    <p className="m-0">{`Jobs &`}</p>
                    <p className="m-0">Internship</p>
                  </h3>
                  <div className="relative text-base leading-[16px] z-[1]">
                    Discover Varied Career Paths
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                  <img
                    className="flex-1 relative overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/assets/01.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
