import { useState } from "react";
import Button from "./Button";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { cn } from "../utils";
import { AnimatePresence, motion } from "framer-motion";
import useDetectScroll from "@smakss/react-scroll-direction";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const scrollDir = useDetectScroll();

  const data = [
    {
      title: "Home",
      link: "home",
    },

    {
      title: "About",
      link: "about",
    },
    {
      title: "tokenomics",
      link: "tokenomics",
    },
    {
      title: "roadmap",
      link: "roadmap",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="MobileNav"
            className={cn(
              "w-full h-screen fixed top-0 left-0 bg-white z-50 lg:hidden text-black p-5"
            )}
          >
            <IoMdClose
              className="absolute top-5 right-5 text-3xl"
              onClick={() => {
                setOpen(false);
              }}
            />

            <div className="">
              <img src="/logo.webp" alt="Logo" className="w-20" />

              <ul className=" font-secondary items-start capitalize mt-10 gap-y-5 flex flex-col gap-x-10">
                {data.map((item, i) => (
                  <a
                    href={`#${item.link}`}
                    className=""
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <li key={i}>{item.title}</li>
                  </a>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cn("w-full fixed top-0 left-0 z-40 bg-white transition-all ease-in-out duration-300", {
        "translate-y-0": scrollDir === "up",
        "-translate-y-full": scrollDir === "down",
      })}>
        <div className="w-full py-3 text-center bg-black text-white font-primary text-xs font-semibold">
          BUY MONKEYGROK NOW
        </div>

        <nav className="w-full font-primary py-4 px-5">
          <div
            className="mx-auto w-full flex justify-between items-center
      "
          >
            <div className="flex items-center gap-1 font-bold">
              <img src="/logo.webp" alt="Logo" className="w-8" />
              <h2>MONKEYGROK</h2>
            </div>
            <ul className=" font-secondary items-center text-sm fit uppercase font-semibold gap-x-10 lg:flex hidden">
              {data.map((item, i) => (
                <a href={`#${item.link}`} className="">
                  <li key={i}>{item.title}</li>
                </a>
              ))}
            </ul>
            <Button className="lg:block hidden">WHITEPAPER</Button>

            <CgMenuRight
              className="lg:hidden block text-2xl"
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
        </nav>
      </div>

      <div className="fixed md:block hidden top-0 bottom-0 -right-4 my-auto origin-top bg-white z-10 w-fit h-fit py-2 px-5 font-black text-slate-500 -rotate-90">
        <h1 className="">TWITTER</h1>
      </div>
    </>
  );
};

export default Nav;
