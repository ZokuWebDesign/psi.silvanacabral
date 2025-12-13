import Link from 'next/link'
import { FileQuestion, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="rounded-full bg-muted p-6 mb-6">
        <FileQuestion className="h-16 w-16 text-muted-foreground" />
      </div>
      <h2 className="text-4xl font-bold mb-2">Página Não Encontrada</h2>
      <p className="text-lg mb-8 text-muted-foreground text-center max-w-md">
        Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido removida ou o endereço está incorreto.
      </p>
      <Button asChild size="lg">
        <Link href="/" className="gap-2">
          <Home className="h-4 w-4" />
          Voltar ao Início
        </Link>
      </Button>
    </div>
  )
}