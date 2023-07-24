import Image from "next/image";

import DaveImage from "@/public/images/DaveImage.png";
import MarkIcon from "../shared/icons/MarkIcon";
import InvertedMarkIcon from "../shared/icons/InvertedMarkIcon";

///////Code
export default function CustomerReview() {
  return (
    <div className='flex customers:mb-60 mb-12 max-w-marks mx-auto' id='review'>
      <div className='relative top-14 pl-8 hidden nomark:flex'>
        <MarkIcon />
      </div>
      <div className='max-w-desktop mx-auto px-8 flex flex-col items-center '>
        <h2 className='text-blue1 font-bold customers:text-5xl text-3xl customers:mb-12 mb-7'>
          Depoimentos de nossos clientes
        </h2>
        <ul className='customers:flex grid gap-10 gap-y-4'>
          <li className='customers:px-12 customers:py-8 py-7 px-5 shadow-box bg-white rounded-[10px]'>
            <div className='flex items-center gap-7 mb-5'>
              <Image src={DaveImage} alt={"ProfileImage"} />
              <h3 className='text-blue1 screenMedian:text-2xl text-xl font-archivo font-bold'>
                Dave Adams
              </h3>
            </div>
            <p className='max-w-sm text-blue1 font-archivo screenMedian:text-xl text-base'>
              Excelente atendimento! A Dra. Suelen foi muito atenciosa e
              profissional durante a consulta. Senti que fui ouvido e recebi
              todas as informações necessárias de forma clara e objetiva.
              Recomendo!
            </p>
          </li>
          <li className='customers:px-12 customers:py-8 py-7 px-5 shadow-box bg-white rounded-[10px]'>
            <div className='flex items-center gap-7 mb-5'>
              <Image src={DaveImage} alt={"ProfileImage"} />
              <h3 className='text-blue1 screenMedian:text-2xl text-xl font-archivo font-bold'>
                Dave Adams
              </h3>
            </div>
            <p className='max-w-sm text-blue1 font-archivo screenMedian:text-xl text-base'>
              Excelente atendimento! A Dra. Suelen foi muito atenciosa e
              profissional durante a consulta. Senti que fui ouvido e recebi
              todas as informações necessárias de forma clara e objetiva.
              Recomendo!
            </p>
          </li>
          <li className='customers:px-12 customers:py-8 py-7 px-5 shadow-box bg-white rounded-[10px]'>
            <div className='flex items-center gap-7 mb-5'>
              <Image src={DaveImage} alt={"ProfileImage"} />
              <h3 className='text-blue1 screenMedian:text-2xl text-xl font-archivo font-bold'>
                Dave Adams
              </h3>
            </div>
            <p className='max-w-sm text-blue1 font-archivo screenMedian:text-xl text-base'>
              Excelente atendimento! A Dra. Suelen foi muito atenciosa e
              profissional durante a consulta. Senti que fui ouvido e recebi
              todas as informações necessárias de forma clara e objetiva.
              Recomendo!
            </p>
          </li>
        </ul>
      </div>
      <div className='self-end relative top-10 pr-8 hidden nomark:flex'>
        <InvertedMarkIcon />
      </div>
    </div>
  );
}
