import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarHeart } from 'lucide-react';
import { WHATSAPP_LINKS } from '@/constants/links';
import { ScrollArea } from '../ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function Approach() {
  return (
    <section id="approach" className="w-full bg-[#faf8f2] py-16 lg:py-28 px-4 md:px-6 xl:px-14 2xl:px-[72px] flex justify-center text-[#14675e] unselectable">
      <div className="flex flex-col w-full items-center text-center">

        <div className="space-y-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium">
            Nossa Abordagem
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Cada pessoa chega com uma história única. Por isso, o trabalho é feito com calma, com atenção ao que você traz em cada encontro. A psicoterapia psicanalítica é um processo contínuo, que vai se construindo sessão a sessão, sempre com sigilo e respeito ao seu tempo.
          </p>
        </div>

        <div className="w-full max-w-7xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-6">
            
            {/* Step 1 */}
            <div className="flex flex-col max-w-[302px] items-center text-center -space-y-8">
              <h1 className="font-serif bg-gradient-to-b from-[#14675e] to-transparent bg-clip-text text-transparent select-none">
                1
              </h1>
              <p>
                O primeiro passo é o agendamento. Você pode entrar em contato pelo WhatsApp para verificar os horários disponíveis.
              </p>                
            </div>

            {/* Step 2 */}
            <div className="flex flex-col max-w-[302px] items-center text-center -space-y-8">
              <h1 className="font-serif bg-gradient-to-b from-[#14675e] to-transparent bg-clip-text text-transparent select-none">
                2
              </h1>
              <p>
                Você informa sua disponibilidade, online ou presencial, e tira dúvidas sobre o funcionamento das consultas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col max-w-[302px] items-center text-center -space-y-8">
              <h1 className="font-serif bg-gradient-to-b from-[#14675e] to-transparent bg-clip-text text-transparent select-none">
                3
              </h1>
              <p>
                Nas primeiras sessões, vamos nos conhecer e entender o que trouxe você à terapia. É um espaço de escuta livre e acolhedora.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col max-w-[302px] items-center text-center -space-y-8">
              <h1 className="font-serif bg-gradient-to-b from-[#14675e] to-transparent bg-clip-text text-transparent select-none">
                4
              </h1>
              <p>
                A continuidade do processo são decididos em conjunto, sempre respeitando o que faz sentido para você naquele momento.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 lg:pt-14">
          <Button
            className="w-[262px] h-[52px] bg-[#168b7d] hover:bg-[#126e63] p-0 rounded-2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
          >
            <a
              href={WHATSAPP_LINKS.CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full justify-center items-center px-[18px] py-[14px] gap-[6px] text-[#FAF8F2] text-base font-semibold"
            >
              <CalendarHeart className="w-5 h-5" />
              Agendar uma consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
