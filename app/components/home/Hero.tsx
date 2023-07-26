//////Library
import Image from "next/image";
import Link from "next/link";
//////Library

//////icons
import SuelenImage from "@/public/images/ImageSuelenImage.png";
import ArrowIcon from "../shared/icons/ArrowIcon";
//////icons

///////////////Code
export default function Hero() {
  return (
    <div
      id='home'
      className='max-w-desktop mx-auto px-8 desk:flex items-center justify-between desk:pt-[226px] pt-[138px] -mt-[83px] desk:mb-60 mb-12 gap-20'
    >
      <div className=''>
        <p className='desk:text-lg text-sm 	font-archivo italic font-thin	text-font1'>
          Suelen Budziak CRO/PR 33672
        </p>
        <h1 className='desk:text-5xl text-3xl max-w-xl font-bold font-roboto mb-5'>
          Uma vida melhor começa com um lindo sorriso
        </h1>
        <p className='font-archivo desk:text-2xl text-sm max-w-3xl desk:mb-10 my-10'>
          Venha conhecer nossa clinica e fazer uma avaliação gratuita e sem
          compromisso!
        </p>
        <Link href={"#contato"}>
          <button className='font-roboto font-black bg-red1 flex items-center gap-3 text-white px-6 py-3 rounded-[10px] hover:bg-red4 transition-all mb-6'>
            Entre em Contato <ArrowIcon />
          </button>
        </Link>
      </div>
      <div className='grid justify-center'>
        <Image src={SuelenImage} alt={"Suelen Image"} />
      </div>
    </div>
  );
}
