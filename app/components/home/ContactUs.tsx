import Link from "next/link";
import InstagramIcon from "../shared/icons/InstagramIcon";
import FacebookIcon from "../shared/icons/FacebookIcon";
import LinkedinIcon from "../shared/icons/LinkedinIcon";
import TwitterIcon from "../shared/icons/TwitterIcon";
import UserIcon from "../shared/icons/UserIcon";
import PhoneIcon from "../shared/icons/PhoneIcon";
import MessangeIcon from "../shared/icons/MessangeIcon";

export default function ContactUs() {
  return (
    <div className='w-full max-w-desktop px-8 mx-auto flex screen3:flex-row flex-col justify-between screen3:mb-60 mb-12'>
      <div className=' text-blue1 mb-12'>
        <h3 className='screen4:text-5xl text-3xl font-roboto font-bold max-w-[463px] mb-12 '>
          Entre em Contato Conosco
        </h3>
        <ul>
          <li className='flex flex-col screen4:gap-2 mb-7'>
            <span className='font-roboto font-bold screen4:text-3xl text-xl'>
              Telefone
            </span>
            <span className='font-archivo screen4:text-2xl text-sm'>
              (42)913245434
            </span>
          </li>
          <li className='flex flex-col screen4:gap-2 mb-7'>
            <span className='font-roboto font-bold screen4:text-3xl text-xl'>
              Email
            </span>
            <Link href={"#"} className='font-archivo screen4:text-2xl text-sm'>
              drasuelen@gmail.com
            </Link>
          </li>
          <li className='flex flex-col screen4:gap-2 mb-7'>
            <span className='font-roboto font-bold screen4:text-3xl text-xl'>
              Localização
            </span>
            <span className='font-archivo max-w-[320px] screen4:text-2xl text-sm'>
              R. Altíno Pereira de Lima, 1814 - Centro, São Mateus do Sul - PR,
              83900-000
            </span>
          </li>
        </ul>
        <ul className='flex gap-6'>
          <li>
            <Link href={"#"}>
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <LinkedinIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <form action='' className='flex flex-col screeb4:gap-6 gap-[10px] '>
          <div className='flex gap-10 items-center outline-2 outline-black1 outline rounded-[10px] py-4 pl-7 pr-4'>
            <span>
              <UserIcon />
            </span>
            <input
              type='text'
              className='border-none outline-none text-2xl w-[700px]'
            />
          </div>
          <div className='flex gap-10 items-center outline-2 outline-black1 outline rounded-[10px] py-4 pl-7 pr-4'>
            <span>
              <PhoneIcon />
            </span>
            <input
              type='text'
              className='border-none outline-none text-2xl w-[700px]'
            />
          </div>
          <div className=' outline-2 outline-black1 outline rounded-[10px] py-4 pl-7 pr-5'>
            <textarea className='border-none outline-none text-2xl w-full'></textarea>
          </div>
          <div>
            <button className='bg-red2 screen4:py-3 screen4:px-6 py-2 px-4 rounded-border text-white screen4:text-2xl text-sm font-roboto font-bold'>
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
