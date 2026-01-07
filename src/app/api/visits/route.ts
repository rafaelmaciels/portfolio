import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// O arquivo ficará na raiz do projeto
const DB_PATH = path.join(process.cwd(), 'visits.json');

export async function GET() {
  try {
    let count = 0;

    // Se o arquivo já existe, lê o valor atual
    if (fs.existsSync(DB_PATH)) {
      const fileData = fs.readFileSync(DB_PATH, 'utf-8');
      const json = JSON.parse(fileData);
      count = json.count || 0;
    }

    // Incrementa
    count++;

    // Salva o novo valor
    fs.writeFileSync(DB_PATH, JSON.stringify({ count }));

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Erro no contador:", error);
    return NextResponse.json({ count: 1 }); // Fallback se der erro
  }
}