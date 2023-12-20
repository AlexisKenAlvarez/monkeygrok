import { motion } from "framer-motion";
import Button from "../components/Button";
import { useInView } from "react-intersection-observer";

const Tokenomics = () => {
  const settings = { triggerOnce: false, threshold: 0.5, rootMargin: `${window.innerHeight}px 0px  0px 0px` }

  const [ref, inView] = useInView(settings)
  const tokenData = [
    {
      title: "$1.5T+",
      desc: "Trade Volume",
    },

    {
      title: "160M+",
      desc: "All Time Trades",
    },
    {
      title: "300+",
      desc: "Integrations",
    },
    {
      title: "4,400+",
      desc: "Community Delegates",
    },
  ];
  return (
    <section className="w-full min-h-screen font-primary py-14">
      <div className="w-full bg-cream py-14" ref={ref}>
        <div className="max-w-screen-xl mx-auto text-center px-5 ">
          <h3 className="font-semibold">MonkeyGrok Tokenomics</h3>
          <h1 className="text-7xl font-black font-header tracking-tight">
            MONKEY TOKEN SYSTEM
          </h1>
          <div className=" flex flex-wrap items-center justify-center mt-4 gap-10 md:gap-14">
            {tokenData.map((items, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={inView && { opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.16, 0.77, 0.47, 0.97],
                  delay: i * 0.07,
                }}
                className=""
                key={items.desc}
              >
                <h1 className="text-2xl font-black font-primary">
                  {items.title}
                </h1>
                <p className="font-secondary">{items.desc}</p>
              </motion.div>
            ))}
          </div>

          <Button className="mt-10 text-cream" variant="black">Buy token</Button>
        </div>
      </div>

      <div className="w-full mt-14 md:px-20">
        <h1 className="font-bold text-2xl md:text-left text-center">
          THE MONKEYS 2
        </h1>
        <div className="w-full mt-4 flex gap-2 overflow-hidden">
          {[...new Array(2)].map((_, i) => (
            <div className="w-full h-full overflow-hidden" key={i}>
              <img
                src={`/items/${i + 4}.webp`}
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

export default Tokenomics;
