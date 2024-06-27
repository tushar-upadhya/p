import { ArrowUpRight } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="mt-6 w-full xl:mb-32 text-center justify-center flex items-center">
      <div className="flex items-center justify-center">
        <div className="text-springgreen-100 leading-8 mq450:leading-6 mq800:leading-7">
          Get in touch with us
        </div>
        <ArrowUpRight size={24} className="text-springgreen-100 ml-1" />
      </div>
    </div>
  );
};

export default GetInTouch;
