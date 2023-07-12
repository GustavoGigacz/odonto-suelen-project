import ClockIcon from "../shared/icons/ClockIcon";
import CorrectIcon from "../shared/icons/CorrectIcon";
import PlanIcon from "../shared/icons/PlanIcon";
import Square3DIcon from "../shared/icons/Square3DIcon";
import ThoothIcon from "../shared/icons/ThoothIcon";

export default function OurAttendment() {
  return (
    <div className='customers:mb-60 mb-12 max-w-desktop mx-auto px-8 mt-60'>
      <h2 className='text-center text-blue1 text-5xl font-roboto font-bold mb-10'>
        Como é ser nosso cliente?
      </h2>
      <ul className='flex screen3:gap-5 gap-4 flex-wrap justify-center screen3:text-2xl text-xl font-archivo font-bold text-blue1 '>
        <li className='p-9 shadow-box2 rounded-[10px]'>
          <Square3DIcon />
          <p className='max-w-[197px] screen3:pt-5 pt-4 '>
            Avaliação com Raio-X Panorâmico (sem custo)
          </p>
        </li>
        <li className='p-9 shadow-box2 rounded-[10px]'>
          <PlanIcon />
          <p className='max-w-[197px] screen3:pt-5 pt-4'>
            Plano de tratamento e diagnóstico
          </p>
        </li>
        <li className='p-9 shadow-box2 rounded-[10px] '>
          <ClockIcon />
          <p className='max-w-[197px] screen3:pt-5 pt-4'>
            Aprovação e agendamento do procedimento
          </p>
        </li>
        <li className='p-9 shadow-box2 rounded-[10px]'>
          <ThoothIcon />
          <p className='max-w-[197px] screen3:pt-5 pt-4'>
            Realização dos procedimentos dentro da clínica
          </p>
        </li>
        <li className='p-9 shadow-box2 rounded-[10px]'>
          <CorrectIcon />
          <p className='max-w-[197px] screen3:pt-5 pt-4'>
            Cuidados e assistência pré e pós cirúrgica
          </p>
        </li>
      </ul>
    </div>
  );
}
