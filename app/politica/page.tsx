"use client";

import { useEffect, useState } from "react";
import { Shield, ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Privacy = () => {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Política de Privacidade</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos suas informações.
          </p>
        </div>

        <div className="bg-card rounded-xl border shadow-sm p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">1. Informações que Coletamos</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Podemos coletar informações pessoais que você nos fornece voluntariamente ao usar nosso site, como nome, endereço de e-mail e número de telefone ao preencher formulários de contato. Também podemos coletar informações automaticamente, como endereço IP, tipo de navegador, provedor de serviços de Internet (ISP), páginas de referência/saída e arquivos visualizados em nosso site (por exemplo, HTML, gráficos, etc.), sistema operacional, carimbo de data/hora e/ou dados de fluxo de cliques para analisar tendências no agregado e administrar o site.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">2. Como Usamos suas Informações</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Usamos as informações que coletamos de várias maneiras, incluindo para:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Fornecer, operar e manter nosso site;</li>
                  <li>Melhorar, personalizar e expandir nosso site;</li>
                  <li>Entender e analisar como você usa nosso site;</li>
                  <li>Desenvolver novos produtos, serviços, recursos e funcionalidades;</li>
                  <li>Comunicar com você, diretamente ou através de um de nossos parceiros, inclusive para atendimento ao cliente, para fornecer atualizações e outras informações relacionadas ao site, e para fins de marketing e promoção;</li>
                  <li>Enviar e-mails para você;</li>
                  <li>Encontrar e prevenir fraudes.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">3. Compartilhamento de Informações</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Não compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta política. Podemos compartilhar suas informações com prestadores de serviços terceirizados que prestam serviços em nosso nome, como hospedagem de sites, análise de dados e serviços de e-mail. Esses prestadores de serviços são autorizados a usar suas informações pessoais apenas conforme necessário para nos fornecer esses serviços.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">4. Segurança</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                A segurança das suas informações pessoais é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">5. Seus Direitos de Privacidade</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Dependendo da sua localização, você pode ter certos direitos em relação às suas informações pessoais, como o direito de acessar, corrigir, excluir ou restringir o uso de suas informações pessoais. Para exercer esses direitos, entre em contato conosco.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">6. Links para Outros Sites</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Nosso site pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, você será direcionado para o site desse terceiro. Aconselhamos vivamente que reveja a Política de Privacidade de cada site que visita. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
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

export default Privacy;