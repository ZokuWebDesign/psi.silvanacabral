"use client";

import { useEffect, useState } from "react";
import { FileText, ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Terms = () => {
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
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Termos de Uso</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Leia atentamente estes termos antes de utilizar nossos serviços.
          </p>
        </div>

        <div className="bg-card rounded-xl border shadow-sm p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">1. Aceitação dos Termos</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar nosso site e serviços, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você discordar de qualquer parte destes termos e condições, por favor, não utilize nosso site.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">2. Licença de Uso</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site para visualização transitória pessoal e não comercial apenas. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Modificar ou copiar os materiais;</li>
                  <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                  <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                  <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">3. Isenção de Responsabilidade</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Os materiais no site são fornecidos "como estão". Não oferecemos garantias, expressas ou implícitas, e, por este meio, isentamos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. Além disso, não garantimos ou fazemos qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">4. Limitações</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Em nenhum caso nós ou nossos fornecedores seremos responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site, mesmo que nós ou um representante autorizado tenhamos sido notificados oralmente ou por escrito da possibilidade de tais danos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">5. Precisão dos Materiais</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em seu site seja preciso, completo ou atual. Podemos fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, não nos comprometemos a atualizar os materiais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">6. Links</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Não analisamos todos os sites vinculados ao seu site e não somos responsáveis pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por nossa parte do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold">7. Modificações</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Podemos revisar estes termos de serviço para o site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold">8. Lei Aplicável</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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

export default Terms;