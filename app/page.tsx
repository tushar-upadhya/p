import Network from "@/components/Category/Network";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/howWeWork/HowWeWork";

const Home = () => {
  return (
    <main>
      <Hero />

      <section className="flex flex-col items-center justify-center pt-0 pb-[2.562rem] px-[1.5rem] box-border max-w-full mq800:pb-[1.688rem]">
        <div className="w-full flex flex-col items-center justify-center">
          <HowWeWork />

          <Network />

          <Featured />
        </div>
      </section>
    </main>
  );
};

export default Home;
