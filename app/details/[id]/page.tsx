"use client";

import Details from "@/components/JobsInternshipMentorAide/Details";
import SideBar from "@/components/JobsInternshipMentorAide/SideBar";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/data";
import { Job } from "@/lib/types/job";
import { useEffect, useState } from "react";

const JDPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleSelectJob = (job: Job) => {
    setSelectedJob(job);
  };

  useEffect(() => {
    const mediaQuerySmall = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsSmallScreen(mediaQuerySmall.matches);
    };

    handleResize();
    mediaQuerySmall.addListener(handleResize);

    return () => {
      mediaQuerySmall.removeListener(handleResize);
    };
  }, []);

  return (
    <div
      className={`flex ${isSmallScreen ? "flex-col" : "md:flex-row"} h-full`}
    >
      {!selectedJob || !isSmallScreen ? (
        <SideBar jobs={data} onSelectJob={handleSelectJob} />
      ) : (
        <Button
          className="mq450:ml-16 py-2 text-white rounded"
          onClick={() => setSelectedJob(null)}
        >
          Back to Jobs
        </Button>
      )}
      {selectedJob && (
        <div className="flex-1 items-center justify-center flex-shrink-0 p-4">
          <Details job={selectedJob} />
        </div>
      )}
    </div>
  );
};

export default JDPage;
