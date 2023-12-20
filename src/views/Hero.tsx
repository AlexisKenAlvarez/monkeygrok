import Button from "../components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="w-full relative flex flex-column min-h-screen">
      <div className="grow bg-black overflow-hidden flex relative items-center">
        <div className="w-full h-full left-0 top-0 absolute flex">
          {[...new Array(2)].map((_, i) => (
            <div className="w-full h-full relative" key={i}>
              <img
                src={`/hero/${i + 1}.webp`}
                alt={`Image${i}`}
                className="w-full h-full absolute top-0 left-0 object-cover object-top opacity-80"
              />
            </div>
          ))}
        </div>

        <div className="font-primary text-white relative z-10 md:px-20 px-10">
          <h1 className="font-black font-header uppercase md:text-6xl text-3xl">
            The first memecoin Grok
          </h1>
          <p className="">
            Inspired by Elon musks “Monkeys” list on his X profile
          </p>

          <Button className="text-black mt-10">
            <div className="flex items-center gap-x-1">
              BUY NOW
              <IoIosArrowRoundForward className="text-2xl" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
