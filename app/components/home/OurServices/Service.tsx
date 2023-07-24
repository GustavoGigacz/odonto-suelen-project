import Image, { StaticImageData } from 'next/image';

interface ServiceProps {
  title: string;
  upperTitle: string;
  paragraph: string;
  lis?: JSX.Element[];
  image: StaticImageData;
  reversed?: boolean;
}

export default function Service({
  title,
  upperTitle,
  paragraph,
  lis,
  image,
  reversed = false,
}: ServiceProps) {
  return (
    <>
      <div className={`w-full ${reversed ? 'bg-white' : 'bg-red2'}`}>
        <div className={`flex`}>
          <div
            className={`flex ${
              reversed ? 'flex-row-reverse' : 'flex-row'
            } max-[1330px]:flex-col items-center max-[1330px]:items-start justify-between max-w-desktop mx-auto px-8 pt-24 pb-28 gap-1 max-[1330px]:w-auto w-full`}
          >
            <div
              className={`max-w-[665px] mb-4 ${
                reversed ? 'text-blue1' : 'text-white'
              } `}
            >
              <p
                className={`screen3:text-2xl text-xl font-thin italic font-archivo ${
                  reversed ? 'text-red2' : 'text-white'
                }  `}
              >
                {upperTitle}
              </p>
              <h3 className='screen3:text-5xl text-3xl font-roboto font-bold screen3:mb-10 mb-5 screen3:mt-2 mt-1'>
                {title}
              </h3>
              <p className='screen3:text-xl text-sm font-archivo'>
                {paragraph}
              </p>
              {lis ? (
                <ul className='screen3:text-xl text-sm font-archivo list-disc pl-5 mt-2'>
                  {lis.map((li, key) => (
                    <li key={`${key}_${li}`}>{li}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className='max-w-[665px]'>
              <Image src={image} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
