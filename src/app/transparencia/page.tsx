import {
  FileText,
  Users,
  Handshake,
  ShieldCheck,
  Download,
} from "lucide-react";
import { Metadata } from "next";

// Metadata para SEO da página
export const metadata: Metadata = {
  title: "Transparência | APDESP",
  description:
    "Acesse nossos relatórios, estatutos e demonstrações financeiras. A APDESP preza pela transparência e confiança.",
};

const documentsByYear = {
  "2025": [],
  "2024": [
    {
      title: "Relatório Anual de Atividades 2024",
      fileUrl: "/pdf/RELATORIO_ATIVIDADES_2024.pdf",
      uploadedAt: "2025-09-23",
      category: "Relatório Anual",
    },
    {
      title: "Relatório Fotográtifico 2024",
      fileUrl: "/pdf/RELATORIO_FOTOGRAFICO_2024.pdf",
      uploadedAt: "2025-09-23",
      category: "Relatório Fotográfico",
    },
  ],
  "2023": [
    {
      title: "Relatório Anual de Atividades 2023",
      fileUrl: "/pdf/RELATORIO_ATIVIDADES_2023.pdf",
      uploadedAt: "2025-09-23",
      category: "Relatório Anual",
    },
    {
      title: "Relatório Fotográtifico 2023",
      fileUrl: "/pdf/RELATORIO_FOTOGRAFICO_2023.pdf",
      uploadedAt: "2025-09-23",
      category: "Relatório Fotográfico",
    },
  ],
  "2022": [
    {
      title: "Relatório Anual de Atividades 2022",
      fileUrl: "/pdf/RELATORIO_ATIVIDADES_2022.pdf",
      uploadedAt: "2025-09-23",
      category: "Relatório Anual",
    },
  ],
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date.toLocaleDateString("pt-BR");
};

const permanentDocuments = [
  {
    title: "Estatuto Social",
    icon: ShieldCheck,
    fileUrl: "/pdf/ESTATUTO.pdf",
  },
  {
    title: "Certidão CNPJ",
    icon: ShieldCheck,
    fileUrl: "/pdf/CNPJ.pdf",
  },
  {
    title: "Certificado de Registro em Cartório",
    icon: ShieldCheck,
    fileUrl: "/pdf/CERTIFICADO_REGISTRO_CARTORIO.pdf",
  },
  {
    title: "Declaração de Funcionamento",
    icon: ShieldCheck,
    fileUrl: "/pdf/DECLARACAO_FUNCIONAMENTO.pdf",
  },
  {
    title: "Inscrição no Conselho Municipal",
    icon: ShieldCheck,
    fileUrl: "/pdf/INSCRICAO_MUNICIPAL.pdf",
  },
  {
    title: "Sede Estatuária",
    icon: ShieldCheck,
    fileUrl: "/pdf/SEDE_ESTATUARIA.pdf",
  },
];

const governanceMembers = [
  { name: "Claudomiro de Souza", role: "Presidente" },
  { name: "Adriana Aparecida de Souza", role: "Vice-Presidente" },
  { name: "Daniela Bavaresco de Carvalho", role: "Tesoureira" },
];

const partners = [
  {
    name: "Empresa Parceira 1",
    logoUrl: "https://placehold.co/150x60?text=Parceiro+1",
  },
  {
    name: "Fundação Apoiadora 2",
    logoUrl: "https://placehold.co/150x60?text=Parceiro+2",
  },
  {
    name: "Governo do Estado",
    logoUrl: "https://placehold.co/150x60?text=Parceiro+3",
  },
  {
    name: "Outro Apoiador",
    logoUrl: "https://placehold.co/150x60?text=Parceiro+4",
  },
];

const TransparenciaPage = () => {
  return (
    <section id="transparencia">
      {/* ESTILO GLOBAL: Fundo radial importado da página Sobre */}
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />

      {/* ESTILO HERO: Estilo do cabeçalho alinhado com a página Sobre */}
      <div className="text-center mb-16 px-4 py-16 md:px-4 flex flex-col justify-center items-center min-h-[60vh] bg-blue-50/80">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Portal da Transparência
          </h1>
          <p className="text-xl text-slate-800 leading-relaxed">
            Nosso compromisso com a clareza e a responsabilidade. Aqui você
            encontra os documentos que detalham nossa atuação e gestão.
          </p>
        </div>
      </div>

      {/* Container principal para o conteúdo, com padding responsivo */}
      <div className="px-4 pb-16 m:px-6 lg:px-32">
        {/* --- Seção de Documentos --- */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Documentos Essenciais
          </h2>

          {/* ESTILO CARDS: Cards de documento agora seguem o novo design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {permanentDocuments.map((doc) => (
              <a
                key={doc.title}
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 text-center rounded-xl shadow-md "
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6">
                  <doc.icon className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {doc.title}
                </h4>
                <div className="flex items-center justify-center text-sm text-blue-600 font-semibold">
                  Ver Documento <Download className="h-4 w-4 ml-2" />
                </div>
              </a>
            ))}
          </div>

          {Object.entries(documentsByYear)
            .sort((a, b) => b[0].localeCompare(a[0]))
            .map(([year, docs]) => (
              <div key={year} className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{`Relatórios de ${year}`}</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {docs.map((doc) => (
                    <a
                      key={doc.title}
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 rounded-lg border border-gray-200 bg-white/50 hover:bg-white hover:border-blue-300 transition-colors"
                    >
                      <FileText className="h-8 w-8 mr-4 flex-shrink-0" />

                      {/* MUDANÇA: Novo container para o texto para melhor organização vertical */}
                      <div className="flex flex-col items-start text-left">
                        <span className="font-semibold ">{doc.title}</span>

                        {/* MUDANÇA: Linha de metadados com Categoria e Data */}
                        <div className="flex items-center gap-x-2 mt-1">
                          <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                            {doc.category}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Publicado em: {formatDate(doc.uploadedAt)}
                          </span>
                        </div>
                      </div>

                      <Download className="h-5 w-5 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 hover:text-blue-300 transition-opacity flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* --- Seção de Governança --- */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Governança
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {governanceMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-lg shadow-sm bg-white/50 border border-gray-200"
              >
                <h4 className="font-bold text-lg text-primary">
                  {member.name}
                </h4>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Seção de Parcerias --- */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Parcerias e Apoio
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {partners.map((partner) => (
              <div key={partner.name}>
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparenciaPage;
