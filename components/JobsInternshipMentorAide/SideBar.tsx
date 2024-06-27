import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Job } from "@/lib/types/job";

interface ISideBarProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
}

const SideBar = ({ jobs, onSelectJob }: ISideBarProps) => {
  console.log("jobs:", jobs);

  const handleJobSelect = (job: Job) => {
    onSelectJob(job);
  };

  return (
    <aside className="w-full lg:w-80 mt-18 lg:mt-0 hide-scrollbar bg-gray-800 text-white ml-6 overflow-y-auto h-screen">
      <div className="mt-8 mx-10">
        <Swiper
          direction="vertical"
          slidesPerView="auto"
          spaceBetween={24}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {jobs.map((item: Job) => (
            <SwiperSlide key={item.id} className="h-auto">
              <Card
                className="bg-tertiary hover:cursor-pointer p-4 min-h-[120px] custom-transition custom-hover"
                onClick={() => handleJobSelect(item)}
              >
                <div className="flex items-center gap-x-4">
                  <Image
                    src={item.companyLogo}
                    width={50}
                    height={50}
                    alt="Company Logo"
                    priority
                  />
                  <div className="border-r pr-4" />
                  <p className="text-springgreen-100 capitalize font-semibold">
                    {item.type}
                  </p>
                </div>

                <p className="text-lg text-center pt-4 pb-6 font-semibold text-white font-nunito-sans">
                  {item.position}
                </p>

                <p className="text-lg text-center font-semibold text-yellow-50 ">
                  {item.jobRole}{" "}
                </p>

                <div className="text-lg font-semibold text-teal-100 justify-center mt-4 cursor-pointer flex items-center">
                  {item.experienceLevel}
                  <ArrowUpRight size={14} />
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </aside>
  );
};

export default SideBar;
