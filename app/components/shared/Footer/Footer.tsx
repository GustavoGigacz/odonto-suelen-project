import Link from "next/link";
import HeartMBIcon from "../icons/HeartMBIcon";

export default function Footer() {
  return (
    <>
      <div className='w-full bg-red2 pt-11'>
        <div className='flex justify-between items-center max-w-desktop mx-0 px-8'>
          <div className='text-white text-xl font-roboto font-bold '>
            <h3>Suelen Budziak</h3>
          </div>
          <div>
            <ul className='flex gap-10 text-white text-xl font-roboto font-medium'>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#"}>Home</Link>
              </li>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#"}>Depoimentos</Link>
              </li>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#"}>Serviços</Link>
              </li>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#"}>Localização</Link>
              </li>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#"}>Contato</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mx-0 mt-10 '>
          <Link
            href={"https://migaczbrothers.com"}
            target='_blank'
            className='flex justify-center items-center gap-1 text-sm text-white font-bold font-archivo'
          >
            <span>MigaczBrothers</span>
            <span>
              <HeartMBIcon />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
