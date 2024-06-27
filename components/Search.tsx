const Search = () => {
  return (
    <div className="w-[519.9px] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
      <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none md:flex rounded-br-none rounded-bl-3xs bg-white box-border flex flex-row items-start justify-start py-4 px-[15px] min-w-[175px] max-w-full border-[1px] border-solid border-black">
        <input
          className="w-[175px] [border:none] [outline:none] font-nunito-sans text-xl bg-[transparent] h-4 relative leading-[28px] text-gray text-left inline-block p-0 z-[1] mq450:text-base mq450:leading-[22px]"
          placeholder="Search by job title..."
          type="text"
        />
      </div>
      <button className="cursor-pointer [border:none] py-[10px] pr-[33px] pl-[34px] bg-springgreen-100 rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none flex flex-row items-start justify-start z-[1] ml-[-0.1px] hover:bg-limegreen mq450:ml-0">
        <div className="relative text-xl leading-[28px] font-nunito-sans text-white text-left inline-block min-w-[63px] z-[2] mq450:text-base mq450:leading-[22px]">
          Search
        </div>
      </button>
    </div>
  );
};

export default Search;
