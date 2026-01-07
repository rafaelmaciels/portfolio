import { renderToStream } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { ResumeDocument } from '@/components/pdf/ResumeDocument';

// Força a rota a ser dinâmica (evita erros de pre-renderização estática)
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Definindo variáveis (fallback se a env não existir)
    const phone = process.env.PHONE_NUMBER || "(83) 9 8799-4005";

    // Gera o stream do PDF
    const stream = await renderToStream(<ResumeDocument phone={phone} />);

    // Retorna a resposta com os cabeçalhos corretos
    return new NextResponse(stream as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Curriculo_Rafael_Maciel.pdf"',
      },
    });
  } catch (error) {
    // Este log vai aparecer no seu terminal (VS Code) se der erro
    console.error("❌ ERRO AO GERAR PDF:", error);
    
    return new NextResponse("Erro ao gerar PDF. Verifique o terminal para detalhes.", { 
      status: 500 
    });
  }
}