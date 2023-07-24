"use client";

/// library
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
/// library

/// icons
import BurguerIcon from "../icons/BurguerIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import CloseIcon from "../icons/CloseIcon";
/// icons

///////////////Code///////////////Code///////////////Code
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <nav className='w-full fixed top-0 mb-8 bg-white z-[9999]'>
        {/* navbar desktop */}
        <ul className='px-8 desk:flex desk:max-w-desktop desk:mx-auto desk:text-font1 desk:text-2xl hidden font-roboto font-semibold'>
          <Link href={"#home"} scroll={false}>
            <li className='cursor-pointer px-8 py-6 border-b-4 border-b-transparent hover:bg-white2 hover:border-b-4 hover:border-y-red2 transition-all'>
              Home
            </li>
          </Link>
          <Link href={"#review"} scroll={false}>
            <li className='cursor-pointer px-8 py-6 border-b-4 border-b-transparent hover:bg-white2 hover:border-b-4 hover:border-y-red2 transition-all'>
              Depoimentos
            </li>
          </Link>
          <Link href={""}>
            <li className='cursor-pointer px-8 py-6 border-b-4 border-b-transparent hover:bg-white2 hover:border-b-4 hover:border-y-red2 transition-all'>
              Serviços
            </li>
          </Link>
          <Link href={""}>
            <li className='cursor-pointer px-8 py-6 border-b-4 border-b-transparent hover:bg-white2 hover:border-b-4 hover:border-y-red2 transition-all'>
              Localização
            </li>
          </Link>
          <Link href={""}>
            <li className='cursor-pointer px-8 py-6 border-b-4 border-b-transparent hover:bg-white2 hover:border-b-4 hover:border-y-red2 transition-all'>
              Contato
            </li>
          </Link>
        </ul>
        {/* navbar desktop */}

        {/* navbar mobile */}
        <div className='px-8 flex items-center mx-auto justify-between desk:hidden mt-9 mb-9'>
          <span className='text-2xl text-foreground font-bold cursor-pointer text-red2'>
            Suelen
          </span>
          <button onClick={toggleMenu}>
            <BurguerIcon />
          </button>
        </div>
        {/* navbar mobile */}
      </nav>

      {/* mobile navmenu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className='font-roboto font-bold fixed h-full w-full top-0 left-0 text-center bg-white flex flex-col z-[9999]'
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <button
              onClick={toggleMenu}
              className='ml-auto mt-9 mr-8 mb-[-68px] z-10'
            >
              <CloseIcon />
            </button>
            <div className='flex flex-col justify-center h-full'>
              <ul className='flex flex-col text-5xl gap-4 leading-[125%]'>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.16,
                  }}
                >
                  <Link href={"#"}>Home</Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.22,
                  }}
                >
                  <Link href={"#"}>Contato</Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.28,
                  }}
                >
                  <Link href={"#"}>Serviços</Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.34,
                  }}
                >
                  <Link href={"#"}>Localização</Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  <Link href={"#"}>Depoimentos</Link>
                </motion.li>
              </ul>
              <ul className='flex gap-4 pt-8 justify-center'>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.48,
                  }}
                >
                  <Link href={"#"}>
                    <InstagramIcon />
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.48,
                  }}
                >
                  <Link href={"#"}>
                    <FacebookIcon />
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.48,
                  }}
                >
                  <Link href={"#"}>
                    <TwitterIcon />
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.48,
                  }}
                >
                  <Link href={"#"}>
                    <LinkedinIcon />
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* mobile navmenu */}
    </>
  );
}
