import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 px-16 flex flex-row mq450:py-6 mq450:px-4 items-start justify-between gap-[20px] text-left text-base text-white font-nunito-sans">
      <Link href={"/"}>
        <Image
          className="relative "
          height={150}
          width={150}
          priority
          alt="logo"
          src="/assets/logo.png"
        />
      </Link>

      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
        <Link
          href={"/"}
          className="[text-decoration:none] relative leading-[16px] hover:text-springgreen-100 duration-200 transition-all text-[inherit] inline-block min-w-[75px] whitespace-nowrap"
        >
          Login App
        </Link>
      </div>
    </header>
  );
};

export default Header;
