"use client";

import Details from "@/components/JobsInternshipMentorAide/Details";
import SideBar from "@/components/JobsInternshipMentorAide/SideBar";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/data";
import { Job } from "@/lib/types/job";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  // useEffect(() => {
  //   const type = searchParams.get("type");

  //   if (type) {
  //     const jobs = data.filter(
  //       (job) => job.type.toLowerCase() === type.toLowerCase()
  //     );
  //     setFilteredJobs(jobs);
  //     if (jobs.length > 0) {
  //       setSelectedJob(jobs[0]);
  //     }
  //   } else {
  //     setFilteredJobs([]);
  //   }
  // }, [searchParams]);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };

  return (
    <div
      className={`flex ${isSmallScreen ? "flex-col" : "md:flex-row"} h-full`}
    >
      {!selectedJob || !isSmallScreen ? (
        <SideBar jobs={data} onSelectJob={handleJobSelect} />
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

export default DetailsPage;
