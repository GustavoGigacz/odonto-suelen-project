import Link from "next/link";
import InstagramIcon from "../shared/icons/InstagramIcon";
import FacebookIcon from "../shared/icons/FacebookIcon";
import LinkedinIcon from "../shared/icons/LinkedinIcon";
import TwitterIcon from "../shared/icons/TwitterIcon";
import UserIcon from "../shared/icons/UserIcon";

export default function ContactUs() {
  return (
    <div className='w-full max-w-desktop px-8 mx-auto flex screen3:flex-row flex-col justify-between screen3:mb-60 mb-12'>
      <div className=' text-blue1'>
        <h3 className='text-5xl font-roboto font-bold max-w-[463px] mb-12 '>
          Entre em Contato Conosco
        </h3>
        <ul>
          <li className='flex flex-col gap-2 mb-7'>
            <span className='font-roboto font-bold text-3xl'>Telefone</span>
            <span className='font-archivo text-2xl'>(42)913245434</span>
          </li>
          <li className='flex flex-col gap-2 mb-7'>
            <span className='font-roboto text-3xl font-bold'>Email</span>
            <Link href={"#"} className='font-archivo text-2xl'>
              drasuelen@gmail.com
            </Link>
          </li>
          <li className='flex flex-col gap-2 mb-7'>
            <span className='font-roboto text-3xl font-bold'>Localização</span>
            <span className='font-archivo text-2xl max-w-[320px]'>
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
        <form action='' className='flex flex-col gap-6'>
          <div className='flex gap-10 items-center outline-2 outline-black1 outline rounded-[10px] py-4 pl-7 pr-4'>
            <UserIcon />
            <input
              type='text'
              className='border-none outline-none text-2xl w-[700px]'
            />
          </div>
          <div className='flex gap-10 items-center outline-2 outline-black1 outline rounded-[10px] py-4 pl-7 pr-4'>
            <UserIcon />
            <input
              type='text'
              className='border-none outline-none text-2xl w-[700px]'
            />
          </div>
          <div className='outline-2 outline-black1 outline rounded-[10px] py-4 pl-7 pr-5'>
            <textarea className='border-none outline-none text-2xl w-[800px]'></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
