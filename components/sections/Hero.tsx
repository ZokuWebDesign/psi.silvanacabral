import Image from "next/image";
import { CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/constants/links";

export function Hero() {
  return (
    <section className="w-full flex bg-hero-bg unselectable">
      <div className="w-full flex max-w-7xl justify-center items-center container py-24 xl:py-[120px] px-6 xl:px-[124px]">
        <div className="w-full flex flex-col-reverse xl:flex-row gap-6 xl:gap-0 justify-center xl:justify-between items-center xl:flex-wrap">
          <div className="w-full flex flex-col justify-center text-center lg:text-start space-y-8 max-w-[480px]">
            <div className="space-y-4">
              <h2 className="font-serif tracking-tighter lg:max-w-[420px]">
                Cuidar da mente também é cuidar da vida
              </h2>
              <p className="font-mono lg:max-w-[420px]">
                Atendimento psicológico individual para crianças, adolescentes, adultos e idosos em um consultório acolhedor, com escuta atenta e respeito à história de cada pessoa.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-start">
              <Button
                className="bg-[#168b7d] hover:bg-[#126e63] w-[250px] h-[52px] p-0 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <a
                  href={WHATSAPP_LINKS.CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full justify-center px-[18px] py-[14px] gap-[6px] text-[#FAF8F2] text-base font-semibold"
                >
                  <Image src="/assets/icons/calendar-heart-01.svg" alt="Ícone Calendário" width={20} height={20} />
                  <span className="p-[2px]">Agendar consulta</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="flex relative">
            <div className="relative w-[224px] md:w-[360px] lg:w-[455px] h-[226px] md:h-[362px] lg:h-[458px]">
              <Image
                src="https://i.ibb.co/cXJZp04m/hero.webp"
                alt="Silvana Cabral"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute hidden xl:flex top-16 -left-20 items-center bg-white hover:bg-[#F1FCFA] text-[#414651] hover:text-[#14675E] gap-1 pl-2 pr-[10px] py-1 rounded-[8px] border border-[#D5D7DA] hover:border-[#9FF0DE] shadow-sm transition-all duration-300">
              <div className="relative w-[12px] h-[12px]">
                <Image src="/assets/icons/brain.svg" alt="Icon" fill className="object-cover" />
              </div>
              <span className="text-sm font-medium">Abordagem psicanalítica sólida</span>
            </div>
            
            <div className="absolute hidden xl:flex top-52 -right-[116px] items-center bg-white hover:bg-[#F1FCFA] text-[#414651] hover:text-[#14675E] gap-1 pl-2 pr-[10px] py-1 rounded-[8px] border border-[#D5D7DA] hover:border-[#9FF0DE] shadow-sm transition-all duration-300">
              <div className="relative w-[12px] h-[12px]">
                <Image src="/assets/icons/handshake-deal-square.svg" alt="Icon" fill className="object-cover" />
              </div>
              <span className="text-sm font-medium">Relação de confiança e respeito</span>
            </div>
            
            <div className="absolute hidden xl:flex bottom-16 -left-[90px] items-center bg-white hover:bg-[#F1FCFA] text-[#414651] hover:text-[#14675E] gap-1 pl-2 pr-[10px] py-1 rounded-[8px] border border-[#D5D7DA] hover:border-[#9FF0DE] shadow-sm transition-all duration-300">
              <div className="relative w-[12px] h-[12px]">
                <Image src="/assets/icons/user-profile.svg" alt="Icon" fill className="object-cover" />
              </div>
              <span className="text-sm font-medium">Atendimento em todas as fases da vida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
