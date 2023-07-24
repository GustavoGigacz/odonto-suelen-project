import Link from 'next/link';
import Image from 'next/image';

import LocationImage from '@/public/images/LocationImage.png';

export default function Maps() {
  return (
    <div
      className='max-w-full mb-28 shadow-box2 pt-[100px] -mt-[100px]'
      id='mapa'
    >
      <iframe
        className='w-full h-[432px]'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.7204936172277!2d-50.386984023380315!3d-25.86697845714965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7a351468e7707%3A0xe5c93671b26435e9!2sCl%C3%ADnica%20Oral%20Unic%20S%C3%A3o%20Mateus%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1688757048739!5m2!1spt-BR!2sbr'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  );
}
