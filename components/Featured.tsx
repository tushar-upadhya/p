"use client";

import { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { data } from "../lib/data";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./common/SectionTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Featured = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("");

  const handleFilterJobs = (type: string) => {
    setFilter(type);
  };

  const filteredData = filter
    ? data.filter((item) => item.type.toLowerCase() === filter.toLowerCase())
    : data;

  return (
    <section className="mb-12 mt-32 w-11/12 mq450:mt-12 mq450:text-base xl:mb-32 items-center justify-center">
      <SectionTitle
        titleParts={[
          { text: "Browse ", color: "text-white" },
          { text: " Job  ", color: "text-springgreen-100" },
          { text: "& ", color: "text-white" },
          { text: "Internship", color: "text-springgreen-100" },
        ]}
        className="mq450:text-center mq450:text-7xl ml-2"
      />
      <p className="text-white mq450:hidden mt-2 ml-2 w-11/12 mq450:mt-12 mq450:text-base xl:mb-32 items-center justify-center">
        Find the job/Internship that fits your career aspirations.
      </p>

      <div className="flex gap-1 mt-6 mq450:gap-1">
        <Button
          className={`px-6 mq450:px-10 mq450:py-2 mq750:px-14 mq750:py-8 py-2 text-sm hover:text-springgreen-100 hover:bg-springgreen-200 transition-all duration-200 ${
            filter === "Job" ? "bg-springgreen-100 text-black" : ""
          }`}
          onClick={() => handleFilterJobs("Full Time")}
        >
          Job
        </Button>
        <Button
          className={`px-6 mq450:px-4 hover:text-springgreen-100 hover:bg-springgreen-200 transition-all duration-200 mq450:py-2 py-2 text-sm ${
            filter === "Internship" ? "bg-springgreen-100 text-black" : ""
          }`}
          onClick={() => handleFilterJobs("Internship")}
        >
          Internship
        </Button>
      </div>
      <div className="container mx-auto mt-4">
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1 },
            375: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            980: { slidesPerView: 4 },
            1400: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[400px]"
        >
          {filteredData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  className="bg-tertiary hover:cursor-grab hover:border-springgreen-100 duration-200 transition-all sm:p-4 min-h-[320px]"
                  onClick={() => router.push(`/details/${item.id}`)}
                >
                  <CardHeader className="flex">
                    <div className="flex items-center gap-x-4 ">
                      {/* image */}
                      <Image
                        src={item.companyLogo}
                        width={50}
                        height={50}
                        alt=""
                        priority
                      />
                      <div className="border-r pr-12 " />
                      <p className="text-springgreen-100 capitalize font-semibold">
                        {item.type}
                      </p>
                    </div>
                  </CardHeader>

                  <CardDescription className="text-lg text-center pt-4 pb-6 font-semibold text-white font-nunito-sans text-lg">
                    {item.position}
                  </CardDescription>

                  <CardDescription className="text-lg text-center font-semibold text-yellow-50">
                    {item.jobRole}
                  </CardDescription>

                  <CardFooter className="text-lg font-semibold text-lg text-teal-100 justify-center mt-12 cursor-pointer">
                    <Link
                      href={`/details/${item.id}`}
                      className="text-springgreen-100 hover:underline transition-all duration-200"
                    >
                      Details
                    </Link>
                    <ArrowUpRight size={14} />
                  </CardFooter>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Featured;
