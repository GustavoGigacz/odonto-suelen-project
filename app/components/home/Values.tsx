///////Library
import Image from "next/image";
///////Library

///////Images
import FirstImage from "@/public/images/FirstImage.png";
import SecondImage from "@/public/images/SecondImage.png";
import ThirdImage from "@/public/images/ThirdImage.png";
import ExcellenceIcon from "../shared/icons/ExcellenceIcon";
import TransparencyIcon from "../shared/icons/TransparencyIcon";
import ControlIcon from "../shared/icons/ControlIcon";
import ServiceIcon from "../shared/icons/ServiceIcon";
import RespectIcon from "../shared/icons/RespectIcon";
import ComfortIcon from "../shared/icons/ComfortIcon";
import TechnologyIcon from "../shared/icons/TechnologyIcon";
import AttentionIcon from "../shared/icons/AttentionIcon";
///////Images

///////Code
export default function Values() {
  return (
    <>
      <div className='max-w-desktop mx-auto px-8 flex screen3:flex-row flex-col-reverse items-center '>
        <div className='grid grid-rows-2 screen3:mr-36'>
          <div className='flex screen3:gap-5 gap-2 screen3:mb-5 mb-2 mt-9 screen3:w-full'>
            <Image
              src={FirstImage}
              alt={""}
              className='max-h-img self-end shadow-box rounded-xl screen3:w-full desk:w-[234px] w-[143px]'
            />
            <Image
              src={SecondImage}
              alt={""}
              className='shadow-box rounded-xl screen3:w-full desk:w-[233px] w-[143px]'
            />
          </div>
          <div className='screen3:w-full w-[296px] desk:w-[486px]'>
            <Image
              src={ThirdImage}
              alt={""}
              className='shadow-box rounded-xl '
            />
          </div>
        </div>
        <div className='max-w-[564px]'>
          <h3 className='text-blue1 screen3:text-5xl text-3xl font-roboto font-bold mb-10'>
            Valores que nos guiam
          </h3>
          <ul className='grid screen3:grid-cols-2 gap-5'>
            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold'>
              <ExcellenceIcon />
              <p>Exelência</p>
            </li>

            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold'>
              <TransparencyIcon />
              <p>Transparência</p>
            </li>
            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold'>
              <ControlIcon />
              <p>Controle</p>
            </li>
            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold max-h-[181px]'>
              <ServiceIcon />
              <p>Atendimento humanizado</p>
            </li>
            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold'>
              <RespectIcon />
              <p>Respeito</p>
            </li>
            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold'>
              <ComfortIcon />
              <p>Conforto</p>
            </li>
            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold'>
              <TechnologyIcon />
              <p>Tecnologia</p>
            </li>
            <li className='grid gap-y-6 bg-red2 rounded-xl pt-4  screen3:pr-32 pr-20 pb-12 pl-5 text-white font-archivo screen3:text-2xl text-xl font-bold max-h-[181px]'>
              <AttentionIcon />
              <p className='min-w-[201px]'>Atenção Genuína ao Indivíduo</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
