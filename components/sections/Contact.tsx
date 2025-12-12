"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      toast.error('Você deve concordar com os termos de uso e política de privacidade.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsAgreed(false);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#F3EFE1]">
      <div className="max-w-7xl mx-auto px-4 lg:px-16 xl:px-[72px] py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 justify-center items-start">
          {/* Form Section */}
          <div className="flex flex-col gap-12 max-w-[532px]">
            {/* Header */}
            <div className="flex flex-col gap-2 text-center lg:text-start">
              <h2>
                Entre em contato
              </h2>
              <p>
                Ficou com alguma dúvida ou deseja agendar uma consulta? Preencha o formulário abaixo e entrarei em contato o mais breve possível.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#344054] font-medium text-sm">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  className="h-12"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#344054] font-medium text-sm">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu e-mail"
                  className="h-12"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#344054] font-medium text-sm">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Digite sua mensagem..."
                  className="min-h-[128px] resize-none"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  type="checkbox"
                  id="terms"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  required
                />
                <label htmlFor="terms" className="text-[#344054] text-sm leading-relaxed">
                  Li e estou de acordo com <Link href="/termos" rel="noopener noreferrer" target="_blank" className="text-[#168B7D] hover:underline">Termo de Uso</Link> e <Link href="/politica" rel="noopener noreferrer" target="_blank" className="text-[#168B7D] hover:underline">Política de Privacidade</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full text-[#FAF8F2]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block max-w-[532px] h-[343px] lg:h-full">
            <div className="relative h-full rounded-[56px] border-2 border-gradient-to-b from-[#14675E] to-[#35b78b] shadow-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/9mG3kqDN/contact.webp"
                alt="Silvana Cabral"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
