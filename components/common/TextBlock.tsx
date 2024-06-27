const TextBlock = ({ text }: any) => {
  return (
    <div className="ml-12 mq450:text-center relative leading-8 mt-2 mq450:text-base font-nunito-sans mq450:leading-8 mq800:text-lg mq800:leading-[28px]">
      {text}
    </div>
  );
};

export default TextBlock;
