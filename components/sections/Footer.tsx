'use client';

import { LEGAL_LINKS, PAGE_LINKS, SOCIAL_LINKS, WHATSAPP_LINKS } from '@/constants/links';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Footer = () => {

  return (
    <footer className="bottom-0 left-0 w-full bg-[#9B4322]">

      <div className="flex flex-col max-w-7xl mx-auto gap-[12px] px-6 md:px-12 lg:px-14 py-[12px]">

        <div className="flex flex-col lg:flex-row w-full py-12 gap-6 justify-center lg:justify-between items-center">

          <div className="w-[120px] lg:w-[274px] h-auto">
            <Link
              href={WHATSAPP_LINKS.FOOTER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[120px] lg:w-[274px] h-auto"
              aria-label="Entrar em contato"
            >
              <img src="/assets/logo/footer.svg" alt="Logo Silvana Cabral" className="w-[120px] lg:w-[274px] h-auto" />
            </Link>
          </div>

          <div className="flex flex-row w-full max-w-[782px] gap-6 md:gap-0 justify-center lg:justify-between text-center lg:text-left flex-wrap">

            <div className="w-full lg:w-[224px] sm:max-w-[154px] md:max-w-[224px] lg:max-w-[224px]">
              <h6 className="px-2 py-1 text-[#FAF8F2]">
                Endereço
              </h6>
              <Link href={SOCIAL_LINKS.LOCAL} rel="noopener noreferrer" target="_blank" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                R. Doná Januária, 33 - sala 14 - Santa Cruz, Rio de Janeiro - RJ, 23510-020
              </Link>
            </div>

            <div className="w-full lg:w-[224px] sm:max-w-[154px] md:max-w-[224px] lg:max-w-[224px]">
              <h6 className="px-2 py-1 text-[#FAF8F2]">
                Contato
              </h6>
              <Link href={SOCIAL_LINKS.MAIL} rel="noopener noreferrer" target="_blank" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                psi@silvanacabral.com.br
              </Link>
              <Link href={SOCIAL_LINKS.NUMBER} rel="noopener noreferrer" target="_blank" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                +55 (21) 99775-2840
              </Link>
              <Link href={SOCIAL_LINKS.FACEBOOK} rel="noopener noreferrer" target="_blank" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                @psi.silvanacabral
              </Link>
              <Link href={SOCIAL_LINKS.INSTAGRAM} rel="noopener noreferrer" target="_blank" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                @psi.silvanacabral
              </Link>
            </div>

            <div className="w-full lg:w-[224px] sm:max-w-[154px] md:max-w-[224px] lg:max-w-[224px]">
              <h6 className="px-2 py-1 text-[#FAF8F2]">
                Legal
              </h6>
              <Link href={LEGAL_LINKS.PRIVACY_POLICY} rel="noopener noreferrer" target="_self" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                Política de Privacidade
              </Link>
              <Link href={LEGAL_LINKS.TERMS_OF_USE} rel="noopener noreferrer" target="_self" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                Termos de Uso
              </Link>
              <Link href={LEGAL_LINKS.COOKIES_POLICY} rel="noopener noreferrer" target="_self" className="block px-2 py-1 text-[#FAF8F2] hover:underline">
                Política de Cookies
              </Link>
            </div>

          </div>

        </div>

        <div className="w-full h-[1px] bg-[#FAF8F2] rounded-full" />

        <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0">

          <p className="text-sm text-[#FAF8F2] text-center sm:text-start">
            © {new Date().getFullYear()} Silvana Cabral. Todos os direitos reservados.
          </p>
          <Link href={PAGE_LINKS.LOCUZ} rel="noopener noreferrer author sponsored" target="_blank" className="flex flex-row gap-1 text-[#FAF8F2] text-sm leading-[1.5rem]">
            Criado por:
            <img src="/assets/logo/locuz.svg" alt="Logo LocuZ" className="h-6" />
          </Link>
  
        </div>
      </div>
    </footer>
  );
};

export default Footer;