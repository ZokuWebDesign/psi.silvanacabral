import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Check, ExternalLink } from "lucide-react";
import Image from "next/image"
import { SOCIAL_LINKS, WHATSAPP_LINKS } from "@/constants/links";

export function About() {
  return (
    <section id="about" className="w-full bg-[#f3efe1]">
      <div className="max-w-7xl container py-16 lg:py-28 px-4 md:px-6 xl:px-[72px] justify-center text-[#14675e]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium">
              Quem é Silvana Cabral?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#14675e]/10 p-1 rounded-full">
                  <Check className="w-4 h-4 text-[#14675e]" />
                </div>
                <p className="font-sans text-base leading-relaxed">
                  Psicóloga clínica com atuação em consultório particular.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#14675e]/10 p-1 rounded-full">
                  <Check className="w-4 h-4 text-[#14675e]" />
                </div>
                <p className="font-sans text-base leading-relaxed">
                  Atendimento acolhedor e personalizado, respeitando a singularidade de cada paciente.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#14675e]/10 p-1 rounded-full">
                  <Check className="w-4 h-4 text-[#14675e]" />
                </div>
                <p className="font-sans text-base leading-relaxed">
                  Experiência no tratamento de ansiedade, depressão e questões relacionais.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-center md:justify-start gap-2 pt-2 flex-wrap">
              <Link
                className="group bg-transparent border border-[#14675e] text-[#14675e] hover:bg-[#14675e] hover:text-[#F3EFE1] px-6 py-4 text-lg rounded-lg transition-all duration-300 flex items-center gap-3 w-fit"
                href={SOCIAL_LINKS.INSTAGRAM}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/assets/icons/instagram-brand.svg" className="flex group-hover:hidden" />
                <img src="/assets/icons/instagram-brand-support.svg" className="hidden group-hover:flex" />
                @silvanacabral
              </Link>
              <Link
                className="group bg-transparent border-[#14675e] text-[#14675e] hover:bg-[#14675e] hover:text-[#F3EFE1] px-6 py-4 text-lg rounded-lg transition-all duration-300 flex items-center gap-3 w-fit"
                href={WHATSAPP_LINKS.ABOUT}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/assets/icons/whatsapp-brand.svg" className="flex group-hover:hidden" />
                <img src="/assets/icons/whatsapp-brand-support.svg" className="hidden group-hover:flex" />
                (21) 99775-2840
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col text-center lg:text-start space-y-4">
              <p className="font-sans text-base leading-relaxed">
                Na prática clínica, sempre priorizo uma escuta atenta e respeitosa, considerando a singularidade de cada pessoa. Não há histórias iguais.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Cada paciente é acompanhado no seu tempo, com seriedade, cuidado e compromisso com o processo.
              </p>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="hidden lg:block relative w-full aspect-square md:aspect-[4/5] lg:aspect-square bg-[#e5e0d1] rounded-2xl overflow-hidden shadow-xl">

            <Image
              src="https://i.ibb.co/k22NLGrX/about.webp"
              alt="Silvana Cabral"
              fill
              className="object-cover"
              priority
            />

          </div>
        </div>
      </div>
    </section>
  );
}
