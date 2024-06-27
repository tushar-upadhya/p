import { Job } from "@/lib/types/job";
import MainHeader from "../common/MainHeader";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { data } from "@/lib/data";

const Details = ({ job }: { job: Job }) => {
  const [selectedJob, setSelectedJob] = useState(data[0]);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };

  return (
    <div className="w-11/12 mx-auto my-4 rounded-lg bg-gray-900 text-white font-nunito-sans flex flex-col justify-center items-center gap-12 max-w-full text-base">
      <MainHeader job={selectedJob} />
      <Separator />

      <div className="w-full lg:w-full mx-auto my-6 p-8 rounded-lg bg-gray-800">
        <div className="space-y-4 text-left">
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">
              Minimum Qualification:
            </p>
            <p className="w-full">{selectedJob.minimumQualification}</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">
              Experience Level:
            </p>
            <p className="w-full">{selectedJob.experienceLevel}</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">
              Experience Length:
            </p>
            <p className="w-full">{selectedJob.experience} years</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">Location:</p>
            <p className="w-full">{selectedJob.location}</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">
              Application Deadline:
            </p>
            <p className="w-full">{/* Add your deadline data here */}</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">
              Job Description:
            </p>
            <p className="w-full">{selectedJob.responsibilities}</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">Requirements:</p>
            <ul className="list-disc pl-6">
              {selectedJob.requirements.map((req, index) => (
                <li key={index} className="w-full">
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <p className="font-semibold text-springgreen-100">
              Responsibilities:
            </p>
            <ul className="list-disc pl-6">
              {selectedJob.responsibilities.map((resp, index) => (
                <li key={index} className="w-full">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
