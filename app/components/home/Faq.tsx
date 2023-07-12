import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <div className='max-w-desktop mx-auto px-8 screen4:mb-64 mb-14'>
      <h2 className='text-center font-bold screen4:text-5xl text-3xl screen4:mb-12 mb-8'>
        Perguntas Frequentes
      </h2>
      <div className='border-b border-solid border-blue1'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='font-medium font-roboto text-3xl'>
              Quanto tempo demora o tratamento com lentes de contato?
            </AccordionTrigger>
            <AccordionContent className='font-archivo '>
              A lente de contato dental pode durar de 10 a 20 anos. Mas tenha em
              mente que esse tempo depende de alguns fatores, como boa higiene
              bucal, consultas regulares com o dentista, tipo de alimentação
              adotada após o procedimento, qualidade dos materiais usados, entre
              outros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='border-b border-solid border-blue1'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='font-medium font-roboto text-3xl'>
              Quanto tempo demora o tratamento com lentes de contato?
            </AccordionTrigger>
            <AccordionContent className='font-archivo '>
              A lente de contato dental pode durar de 10 a 20 anos. Mas tenha em
              mente que esse tempo depende de alguns fatores, como boa higiene
              bucal, consultas regulares com o dentista, tipo de alimentação
              adotada após o procedimento, qualidade dos materiais usados, entre
              outros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='border-b border-solid border-blue1'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='font-medium font-roboto text-3xl'>
              Quanto tempo demora o tratamento com lentes de contato?
            </AccordionTrigger>
            <AccordionContent className='font-archivo '>
              A lente de contato dental pode durar de 10 a 20 anos. Mas tenha em
              mente que esse tempo depende de alguns fatores, como boa higiene
              bucal, consultas regulares com o dentista, tipo de alimentação
              adotada após o procedimento, qualidade dos materiais usados, entre
              outros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='border-b border-solid border-blue1'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-4'>
            <AccordionTrigger className='font-medium font-roboto text-3xl'>
              Quanto tempo demora o tratamento com lentes de contato?
            </AccordionTrigger>
            <AccordionContent className='font-archivo '>
              A lente de contato dental pode durar de 10 a 20 anos. Mas tenha em
              mente que esse tempo depende de alguns fatores, como boa higiene
              bucal, consultas regulares com o dentista, tipo de alimentação
              adotada após o procedimento, qualidade dos materiais usados, entre
              outros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='border-b border-solid border-blue1'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-5'>
            <AccordionTrigger className='font-medium font-roboto text-3xl'>
              Quanto tempo demora o tratamento com lentes de contato?
            </AccordionTrigger>
            <AccordionContent className='font-archivo '>
              A lente de contato dental pode durar de 10 a 20 anos. Mas tenha em
              mente que esse tempo depende de alguns fatores, como boa higiene
              bucal, consultas regulares com o dentista, tipo de alimentação
              adotada após o procedimento, qualidade dos materiais usados, entre
              outros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
