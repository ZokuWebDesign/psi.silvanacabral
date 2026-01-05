import Link from 'next/link'
import { FileQuestion, CircleHelp, Home, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS, WHATSAPP_LINKS } from '@/constants/links'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hero-bg text-foreground p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#14675E]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-[#168b7d]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl">
        
        {/* Icon container with enhanced styling
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#14675E]/10 to-[#168b7d]/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="relative rounded-full bg-white border-2 border-[#14675E]/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-[#168b7d]/40">
            <FileQuestion className="h-20 w-20 text-[#14675E] group-hover:text-[#168b7d] transition-colors duration-300" />
          </div>
        </div>
         */}
        
        <CircleHelp className="h-14 w-14 text-[#14675E] group-hover:text-[#168b7d] transition-colors duration-300" />

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#14675E] mb-4 text-center tracking-tight">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#14675E] mb-6 text-center">
          Página Não Encontrada
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg font-mono text-[#14675E] text-center max-w-md mb-12 leading-relaxed opacity-90">
          Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido removida ou o endereço está incorreto.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button 
            asChild 
            className="bg-[#168b7d] hover:bg-[#126e63] text-[#FAF8F2] h-[52px] px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-[#168b7d] hover:border-[#126e63] font-semibold"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              <span>Voltar ao Início</span>
              <ArrowRight className="h-5 w-5 hidden sm:inline" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline"
            className="text-[#14675E] bg-transparent border-2 border-[#126E63] hover:text-[#f3efe1] hover:bg-[#14675E] h-[52px] px-8 rounded-md transition-all duration-300 font-semibold"
          >
            <Link href={WHATSAPP_LINKS.NOTFOUND}>
              <span>Entrar em Contato</span>
            </Link>
          </Button>
        </div>

        {/* Additional helpful text */}
        <p className="mt-12 text-sm text-[#14675E]/70 text-center max-w-md font-mono">
          Se o problema persistir, por favor{' '}
          <a href={SOCIAL_LINKS.MAIL} className="text-[#168b7d] hover:text-[#14675E] underline transition-colors duration-300">
            entre em contato conosco
          </a>
        </p>
      </div>
    </div>
  )
}