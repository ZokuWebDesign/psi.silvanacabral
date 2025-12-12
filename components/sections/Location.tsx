import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS, WHATSAPP_LINKS } from "@/constants/links";
import Link from "next/link";

const Location = () => {
  return (
    <div className="w-full unselectable">
      <div className="w-full h-[500px]">

        <div className="absolute hidden md:flex flex-col mt-[124px] ml-[10px] pl-[12px] py-[10px] pr-[5px] gap-[6px] w-[278px] bg-white rounded-[2px] font-roboto">
          <div className="font-medium text-sm leading-[120%]">
            Contato
          </div>
          <div className="flex gap-2 text-xs leading-[120%]">
            <div className="text-[#5B5B5B]">
              psi@silvanacabral.com.br
            </div>
            <Link href={SOCIAL_LINKS.MAIL} rel="noopener noreferrer" target="_blank" className="text-[#1A73E8]">
              Entrar em contato
            </Link>
          </div>
          <div className="flex gap-2 text-xs leading-[120%]">
            <div className="text-[#5B5B5B]">
              (21) 99775-2840
            </div>
            <Link href={WHATSAPP_LINKS.LOCAL} rel="noopener noreferrer" target="_blank" className="text-[#1A73E8]">
              Enviar mensagem
            </Link>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3674.90900607607!2d-43.68414685502777!3d-22.916726860868593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfa5a6a8eaaab%3A0x424abccdad2f8719!2sPsic%C3%B3loga%20Silvana%20Cabral!5e0!3m2!1spt-BR!2sbr!4v1764246037653!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
    </div>
  );
};

export default Location;
