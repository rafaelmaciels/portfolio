import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import Script from "next/script"; // Importando o componente de script otimizado

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Maciel | Portfolio",
  description: "Desenvolvedor em Transição & Analista de Implantação ERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased`}>
        
        {/* --- GOOGLE ANALYTICS START --- */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3X0XXYHQ6H"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3X0XXYHQ6H');
          `}
        </Script>
        {/* --- GOOGLE ANALYTICS END --- */}

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}