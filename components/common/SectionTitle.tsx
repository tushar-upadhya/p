interface ITitleProps {
  text: string;
  color: string;
}

const SectionTitle = ({
  titleParts = [],
  className = "",
}: {
  titleParts: ITitleProps[];
  className?: string;
}) => {
  return (
    <h1
      className={`ml-12 relative text-7xl  font-semibold text-start mq450:text-lgi mq800:text-19xl mq800:leading-[38px] ${className}`}
    >
      {titleParts.map((part: ITitleProps, index: number) => (
        <span key={index} className={part.color}>
          {part.text}
        </span>
      ))}
    </h1>
  );
};

export default SectionTitle;
