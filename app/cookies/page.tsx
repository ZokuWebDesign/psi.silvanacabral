"use client";

import { useEffect, useState } from "react";
import { Cookie, ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cookies = () => {
  const [currentDate, setCurrentDate] = useState("Dezembro de 2025");

  useEffect(() => {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(now);
    setCurrentDate(formatted.charAt(0).toUpperCase() + formatted.slice(1));
  }, []);
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Início
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Política de Cookies</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Esta política explica como utilizamos cookies e tecnologias similares para reconhecê-lo quando você visita nosso site.
          </p>
        </div>

        <div className="bg-card rounded-xl border shadow-sm p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">1. O que são Cookies?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Cookies são pequenos arquivos de dados que são colocados no seu computador ou dispositivo móvel quando você visita um site. Os cookies são amplamente utilizados pelos proprietários de sites para fazer com que seus sites funcionem, ou funcionem com mais eficiência, bem como para fornecer informações de relatórios.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">2. Por que usamos Cookies?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Utilizamos cookies de primeira parte e de terceiros por vários motivos. Alguns cookies são necessários por motivos técnicos para que nosso site funcione, e nos referimos a eles como cookies "essenciais" ou "estritamente necessários". Outros cookies também nos permitem rastrear e direcionar os interesses de nossos usuários para melhorar a experiência em nossas Propriedades Online. Terceiros servem cookies através do nosso site para publicidade, análises e outros fins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">3. Categorias de Cookies</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Cookies Essenciais:</strong> Estes cookies são estritamente necessários para fornecer a você serviços disponíveis através do nosso site e para usar alguns de seus recursos, como acesso a áreas seguras.</li>
                  <li><strong>Cookies de Desempenho e Análise:</strong> Estes cookies coletam informações que são usadas de forma agregada para nos ajudar a entender como nosso site está sendo usado ou quão eficazes são nossas campanhas de marketing.</li>
                  <li><strong>Cookies de Funcionalidade:</strong> Estes cookies são usados para lembrar informações que você inseriu ou escolhas que você fez (como seu nome de usuário, idioma ou sua região) e fornecem recursos aprimorados e mais pessoais.</li>
                  <li><strong>Cookies de Publicidade:</strong> Estes cookies são usados para tornar as mensagens de publicidade mais relevantes para você. Eles desempenham funções como impedir que o mesmo anúncio reapareça continuamente.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">4. Como você pode controlar os Cookies?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer suas preferências de cookies definindo ou alterando os controles do seu navegador da web para aceitar ou recusar cookies. Se você optar por rejeitar cookies, ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades e áreas do nosso site possa ser restrito. Como os meios pelos quais você pode recusar cookies através dos controles do seu navegador da web variam de navegador para navegador, você deve visitar o menu de ajuda do seu navegador para obter mais informações.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">5. Atualizações desta Política</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Cookies periodicamente para refletir, por exemplo, alterações nos cookies que usamos ou por outros motivos operacionais, legais ou regulamentares. Portanto, visite esta Política de Cookies regularmente para se manter informado sobre nosso uso de cookies e tecnologias relacionadas. A data no final desta Política de Cookies indica quando ela foi atualizada pela última vez.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 pt-6 border-t text-sm text-muted-foreground text-center">
            Última atualização: {currentDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;