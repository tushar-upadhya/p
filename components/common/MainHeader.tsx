import Link from "next/link";
import { Button } from "../ui/button";
import { Job } from "@/lib/types/job";

const MainHeader = ({ job }: { job: Job }) => {
  return (
    <div className="flex items-center justify-between mt-8 w-full max-w-[1248px] h-12 px-4 mx-auto text-white rounded-3xl mq450:flex-col mq450:items-center mq450:justify-center">
      <div className="flex items-center space-x-2 text-2xl font-medium mq450:text-[15px] mq450:text-center">
        <span className="font-semibold font-nunito-sans">{job.position}</span>
        <span className="text-springgreen-100">{job.type}</span>
      </div>
      <div className="mt-4 mq450:mt-6 mq450:mr-0 mq750:mr-28">
        <Link href={`/${job.applyLink}`} target="_blank">
          <Button className="text-black font-semibold transition-all duration-200 hover:text-springgreen-100 hover:bg-springgreen-200 outline-none">
            Apply
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
