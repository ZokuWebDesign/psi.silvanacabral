import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/constants/links";

const faqs = [
  {
    question: "Quanto tempo dura o tratamento psicológico?",
    answer: "A duração do processo varia de pessoa para pessoa. Depende da demanda trazida, da frequência das sessões e do momento de vida. Por isso, não há um tempo fechado definido antecipadamente. Esse é um ponto que pode ser conversado ao longo do acompanhamento."
  },
  {
    question: "Preciso de encaminhamento médico para iniciar a terapia?",
    answer: "Não. Você pode buscar atendimento psicológico por iniciativa própria, sempre que sentir necessidade. Caso haja acompanhamento de outros profissionais de saúde, isso pode ser conversado em sessão."
  },
  {
    question: "O que eu preciso levar para a primeira consulta?",
    answer: "Não é necessário levar documentos específicos, a menos que combinado antes. O mais importante é chegar com abertura para falar sobre o que está acontecendo e sobre o que motivou a busca pelo atendimento."
  },
  {
    question: "As sessões são confidenciais?",
    answer: "Sim. O sigilo profissional é um dos pilares do trabalho em psicologia, dentro dos limites previstos pelas normas da profissão. Questões relacionadas à proteção e segurança do paciente podem ser abordadas com clareza durante as sessões."
  },
  {
    question: "Crianças e adolescentes são atendidos com responsáveis presentes?",
    answer: "Nos atendimentos com crianças e adolescentes, geralmente há momentos exclusivos com o paciente e momentos de conversa com responsáveis. A forma de conduzir esse contato é combinada caso a caso, respeitando sempre o bem-estar da criança ou do adolescente."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="w-full bg-[#FAF8F2]">
      <div className="max-w-7xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-[72px]">
        <div className="max-w-3xl text-center pb-12">
          <h2 className="pb-2 text-left">
            Perguntas Frequentes
          </h2>
          <p className="text-left">
            Aqui você encontra respostas para as dúvidas mais comuns sobre o funcionamento da terapia e o processo de atendimento.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col items-start self-stretch border-b border-[#1FAD9A]">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="flex flex-col w-full"
            >
              <AccordionTrigger className="flex items-center gap-6 py-5 w-full border-t border-[#1FAD9A] hover:no-underline font-[var(--body)]">
                <p className="font-semibold text-[#14675E] text-left">{faq.question}</p>
              </AccordionTrigger>
              <AccordionContent className="flex items-start gap-4 pb-6 w-full">
                <p className="text-[#14675E] text-left">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="max-w-xl text-center pt-12">
          <h3 className="text-[#14675E] pb-2 text-left">
            Ainda tem dúvidas?
          </h3>
          <p className="pb-6 text-left">
            Entre contato conosco! Estamos aqui para te ajudar com o que for preciso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="w-[262px] h-[52px] bg-[#168b7d] hover:bg-[#126e63] p-0 rounded-2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              <a
                href={WHATSAPP_LINKS.CTA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full justify-center items-center px-[18px] py-[14px] gap-[6px] text-[#FAF8F2] text-base font-semibold"
              >
                Entrar em contato
                <Image src="/assets/icons/link-external-01.svg" alt="icon" width={20} height={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
