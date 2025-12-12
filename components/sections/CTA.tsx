import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/constants/links";

const CTA = () => {
  return (
    <section className="flex w-full justify-center bg-cover bg-center bg-[url('/assets/illustrations/banner-7xl.svg')] xl:bg-[url('/assets/illustrations/banner-full.svg')]">
      <div className="w-full max-w-7xl mx-auto py-16 lg:pb-[105px] lg:pt-[117px] px-4 sm:px-6 lg:px-[72px] text-start">
        <div className="flex w-full flex-col max-w-[804px] gap-6 items-start">
          <h2 className="text-[#FAF8F2]">
            Buscar ajuda psicológica é um gesto de cuidado consigo e com a própria história.
          </h2>
          <Button variant="default" size="lg" className="bg-transparent">
            <a
              href={WHATSAPP_LINKS.CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[6px] text-[#FAF8F2] text-base font-semibold"
            >
              <img src="/assets/icons/calendar-heart-02.svg" alt="Calendário" />
              Agendar uma consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
