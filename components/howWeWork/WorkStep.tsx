const WorkStep = ({ number, title }: { number: number; title: String }) => {
  return (
    <div className="w-[20.5rem] flex flex-col items-center justify-center pt-[0.062rem] px-[0rem] pb-[0rem] box-border max-w-full">
      <div className="mb-12 mt-8 w-full xl:mb-32 flex flex-col items-center justify-center text-center">
        <div className="w-[3.125rem] rounded-lg bg-springgreen-100 flex flex-row items-center justify-center py-[0.562rem] px-[0.937rem] box-border">
          <div className="relative leading-[2rem] font-medium inline-block min-w-[1.125rem] z-[1]">
            {number}
          </div>
        </div>
        <h1 className="relative text-[2rem] leading-[3rem] font-bold font-nunito-sans mq450:text-[1rem] mq450:leading-[1.813rem] mq800:text-[1.625rem] mq800:leading-[2.375rem]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default WorkStep;
