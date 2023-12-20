import Button from "../components/Button";

const About = () => {
  return (
    <section className="w-full min-h-screen font-primary py-14">
      <div className="max-w-screen-xl mx-auto text-center px-5">
        <h3 className="font-semibold">About MonkeyGrok</h3>
        <h1 className="text-7xl font-black font-header tracking-tight">
          MONKEY TOKEN PROJECT
        </h1>
        <p className="text-center max-w-prose mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <Button className="mt-10">See more</Button>
      </div>

      <div className="w-full mt-14 md:px-20">
        <h1 className="font-bold text-2xl text-center md:text-left">THE MONKEYS</h1>
        <div className="w-full mt-4 flex gap-2 overflow-hidden">
          {[...new Array(3)].map((_, i) => (
            <div className="w-full h-full overflow-hidden" key={i}>
              <img
                src={`/items/${i + 1}.webp`}
                alt={`image${i}`}
                className=" hover:scale-[1.05] transition-all ease-in-out duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
