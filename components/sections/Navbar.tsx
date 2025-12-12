'use client';

import Link from "next/link";
import { PAGE_LINKS, WHATSAPP_LINKS } from "@/constants/links";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-1000 ease-in-out ${isScrolled
          ? "top-4 left-1/2 -translate-x-1/2 w-auto bg-hero-bg rounded-full shadow-md py-2 px-6 border border-[rgba(255,255,255,0.12)]"
          : "top-0 left-0 w-full px-4 md:px-12 lg:px-14 2xl:px-[72px] py-2 lg:py-4 2xl:py-6 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent lg:hover:from-[rgba(255,255,255,0.06)] lg:hover:to-transparent border-transparent lg:hover:border-[rgba(255,255,255,0.12)] border-b-[2px] lg:hover:border-b-[2px]"
        }`}
    >
      <div className={`mx-auto ${isScrolled ? "" : "max-w-screen-2xl"}`}>
        <div className="flex items-center justify-between gap-0 md:gap-4">
          {/* Logo/Home link */}
          <Link href={PAGE_LINKS.HOME} className="w-[152px] group relative">

            <img
              src="/assets/logo/logo-full.svg"
              alt="Logo"
              className="w-full h-auto relative z-10 opacity-100 group-hover:opacity-80 transition-opacity"
            />

          </Link>

          {/* Navigation links - Hidden when scrolled */}
          <div
            className={`items-center gap-2 text-[#14675E] text-sm md:text-[18px] leading-[32px] overflow-hidden transition-all duration-500 ${isScrolled ? "w-0 opacity-0 hidden" : "hidden lg:flex w-0 lg:w-auto opacity-0 lg:opacity-100"
              }`}
          >
            <Link
              href={PAGE_LINKS.HOME}
              className="p-2 2xl:p-4 group relative flex flex-col transition-colors duration-300"
            >
              Início
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#14675E] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link
              href={PAGE_LINKS.APPROACH}
              className="p-2 2xl:p-4 group relative flex flex-col transition-colors duration-300"
            >
              Processo Terapêutico
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#14675E] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link
              href={PAGE_LINKS.ABOUT}
              className="p-2 2xl:p-4 group relative flex flex-col transition-colors duration-300"
            >
              Sobre mim
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#14675E] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link
              href={PAGE_LINKS.FAQ}
              className="p-2 2xl:p-4 group relative flex flex-col transition-colors duration-300"
            >
              Perguntas Frequentes
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#14675E] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link
              href={PAGE_LINKS.CONTACT}
              className="p-2 2xl:p-4 group relative flex flex-col transition-colors duration-300"
            >
              Contato
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#14675E] group-hover:animate-navprogress" />
              </div>
            </Link>
          </div>

          <div className="relative">
            <Button
              className="group h-auto p-0 bg-transparent border-[#14675e] hover:bg-[#14675e] text-[#14675e] hover:text-[#F3EFE1] rounded-lg transition-all duration-500 flex items-center"
            >
              <a
                href={WHATSAPP_LINKS.CTA}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex w-full justify-center gap-[6px] font-semibold ${isScrolled ? "px-4 py-2 text-sm" : "px-[18px] py-[14px] text-lg w-fit"}`}
              >
                <Image src="/assets/icons/calendar-heart-01.svg" alt="Ícone Calendário" width={20} height={20} className="hidden group-hover:flex" />
                <Image src="/assets/icons/calendar-heart-03.svg" alt="Ícone Calendário" width={20} height={20} className="flex group-hover:hidden" />
                Agendar consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;