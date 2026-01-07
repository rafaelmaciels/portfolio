import { LucideIcon, Code2, Headset, BarChart3, Users, Database, Terminal } from "lucide-react";

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  course: string;
  period: string;
  status: string;
  specifics?: { name: string; url: string }[];
}

export interface Certificate {
  name: string;
  institution: string;
  date: string;
  category: "Tech" | "Gestão" | "Suporte" | "DevOps";
  link?: string; // Campo opcional para links diretos
}

export const DATA = {
  profile: {
    name: "Rafael Maciel",
    shortName: "RM",
    role: "Desenvolvedor Backend (Java) & Analista de Implantação",
    location: "Guarabira, PB",
    email: "contato@rafaelmaciel.net",
    linkedin: "https://www.linkedin.com/in/rafaelmaciels",
    website: "https://www.rafaelmaciel.net",
    headline: [
      "Desenvolvedor Java / Spring Boot",
      "Analista de Implantação ERP",
      "Especialista em Suporte Técnico & Processos"
    ]
  },

  about: {
    title: "Sobre Mim",
    bio: "Profissional com sólida trajetória corporativa em operações, atendimento e sustentação de sistemas (ERP). Em transição estruturada para a área de Tecnologia, trago a maturidade de quem entende as dores do negócio e a lógica de processos reais. Foco atual em desenvolvimento Backend com Java e Spring, unindo soft skills de negociação e resolução de problemas à capacidade técnica de codificação, banco de dados e infraestrutura ágil.",
  },

  skills: {
    hard: [
      "Java 17+ / Orientação a Objetos",
      "Spring Boot / Spring Data JPA",
      "API REST / JSON",
      "SQL / Banco de Dados",
      "ERP Protheus (Regra de Negócio)",
      "Git / GitHub / Versionamento",
      "HTML5 / CSS3 / JavaScript"
    ],
    tools: [
      "IntelliJ IDEA / VS Code",
      "Postman (Testes de API)",
      "Agidesk / Ferramentas de Ticketing",
      "Linux (Terminal/CLI)",
      "ChatGPT para Produtividade"
    ],
    soft: [
      "Resolução de Problemas Complexos",
      "Comunicação Técnica e Não-técnica",
      "Gestão de Conflitos e Crises",
      "Aprendizado Contínuo (Lifelong Learning)",
      "Visão Sistêmica de Processos",
      "Trabalho em Equipe e Colaboração"
    ]
  },

  experience: [
    {
      company: "Morada da Paz Serviços Póstumos",
      role: "Assistente Comercial / Key User Protheus",
      period: "2020 – Atual",
      description: "Atuação estratégica na interface entre Operações e Sistemas, atuando como Key User do ERP Protheus.",
      achievements: [
        "Referência técnica (Key User) na utilização e parametrização do ERP Protheus (Módulos Vendas/Faturamento).",
        "Análise de dados para relatórios gerenciais e suporte à tomada de decisão.",
        "Identificação e reporte de bugs/melhorias no sistema para a equipe de TI.",
        "Suporte de nível 1 e 2 para usuários internos, garantindo a continuidade dos processos de venda."
      ]
    },
    {
      company: "Cloud Soluções Online",
      role: "Desenvolvedor Web & Suporte Técnico",
      period: "2017 – 2020",
      description: "Experiência prática com desenvolvimento web e infraestrutura básica para clientes locais.",
      achievements: [
        "Desenvolvimento e manutenção de sites utilizando HTML, CSS e JavaScript.",
        "Configuração de ambientes de hospedagem, domínios e e-mails corporativos.",
        "Suporte técnico remoto e presencial (Hardware e Software).",
        "Tradução de requisitos de clientes para entregáveis técnicos."
      ]
    },
    {
      company: "Policlínica Mais",
      role: "Coordenador Administrativo",
      period: "2015 – 2017",
      description: "Gestão de processos e liderança de equipe com foco em eficiência operacional.",
      achievements: [
        "Liderança de equipe e gestão de fluxos de atendimento em sistema médico.",
        "Otimização de processos administrativos para redução de tempo de espera.",
        "Suporte operacional aos usuários do sistema de gestão da clínica."
      ]
    },
    {
      company: "AeC Contact Center",
      role: "Suporte Técnico N1 / Retenção",
      period: "2014 – 2015",
      description: "Atuação em ambiente de alta pressão com foco em SLA e resolução técnica.",
      achievements: [
        "Diagnóstico técnico de redes e conectividade para grandes operadoras.",
        "Gestão de incidentes e registro de chamados (Ticketing).",
        "Atuação focada em retenção (Churn) e reversão de insatisfação técnica."
      ]
    }
  ] as Experience[],

  education: [
    {
      institution: "Universidade Estácio de Sá",
      course: "Graduação em Análise e Desenvolvimento de Sistemas",
      period: "2020 - Trancado", 
      status: "Graduação Tecnológica",
      specifics: [
        { 
          name: "Certificado: Programação para Internet", 
          url: "https://certificado.estacio.br/c20137b20b9bf51b00f7bae" 
        },
        { 
          name: "Certificado: Algoritmos Escaláveis", 
          url: "https://certificado.estacio.br/3adb359bb36d917c1a9229c" 
        }
      ]
    },
    {
      institution: "Oracle Next Education (Alura)",
      course: "Formação ONE Tech - Back End",
      period: "2024 - 2025",
      status: "Bootcamp Intensivo",
      specifics: [
        { 
          name: "Certificado Completo: Java, Spring & IA", 
          url: "https://cursos.alura.com.br/program/certificate/a845c96c-f0d2-464d-a035-3f7e2105653b?lang" 
        }
      ]
    }
  ] as EducationItem[],

  certifications: [
    // --- SPRING & API (Destaque Backend) ---
    {
      name: "Spring Boot 3: API Rest em Java",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    {
      name: "Spring Boot 3: Documentação, Testes e Deploy",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    {
      name: "Java: Persistência de dados com Spring Data JPA",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    {
      name: "Challenge Fórum Hub (Spring Framework)",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    // --- JAVA CORE ---
    {
      name: "Java: Consumindo API, arquivos e erros",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    {
      name: "Java: Trabalhando com Listas e Coleções",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    {
      name: "Java: Aplicando a Orientação a Objetos",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    // --- DEVOPS & INFRA ---
    {
      name: "DevOps: Linux CLI e Scripts",
      institution: "Alura",
      date: "2025",
      category: "DevOps",
      link: "https://cursos.alura.com.br/user/rafaelmaciel/fullCertificate/a6de8d19922f7e05ab9b0c61dcda8654"
    },
    {
      name: "DevOps: Tráfego seguro em comunicações web",
      institution: "Alura",
      date: "2025",
      category: "DevOps"
    },
    // --- IA & PRODUTIVIDADE ---
    {
      name: "Spring AI: Integração com OpenAI",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    {
      name: "ChatGPT e Programação: Produtividade",
      institution: "Alura",
      date: "2025",
      category: "Tech"
    },
    // --- BASE & OUTROS ---
    {
      name: "Fundamentos do Gerenciamento de Projetos",
      institution: "Instituição Certificadora", 
      date: "2024",
      category: "Gestão"
    },
    {
      name: "Redes de Computadores",
      institution: "Diversos",
      date: "2023",
      category: "Tech"
    }
  ] as Certificate[]
};