import { Heart, Users, Gift, Building, Share2, Copy } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button"; // Verifique se o caminho do seu botão está correto
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Como Ajudar | APDESP",
  description:
    "Sua ajuda transforma vidas. Doe, seja um voluntário ou torne-se um parceiro da APDESP.",
};

const faqItems = [
  {
    question: "Para onde vai o dinheiro da minha doação?",
    answer:
      "Sua doação é investida diretamente em nossos programas, como a Residência Inclusiva, compra de materiais para terapias, capacitação profissional e manutenção de nossas instalações.",
  },
  {
    question: "Posso ser voluntário mesmo sem experiência prévia?",
    answer:
      "Sim! Temos diversas áreas para voluntariado, desde apoio administrativo até participação em eventos. Oferecemos treinamento e o mais importante é a sua vontade de ajudar.",
  },
  {
    question: "Como minha empresa pode se tornar parceira?",
    answer:
      "Empresas parceiras podem nos apoiar financeiramente, oferecer vagas de trabalho inclusivas ou fornecer serviços. Entre em contato para conversarmos sobre as possibilidades.",
  },
];

const dataHelp = [
  {
    title: "Seja Voluntário",
    description:
      "Doe seu tempo e talento. Sua participação é fundamental em nossos eventos e atividades diárias.",
    link: "/",
    icon: Users,
    button: "Quero ser voluntário",
  },
  {
    title: "Doe para a Residência Inclusiva",
    description:
      "Recebemos doações de utensílios, materiais, equipamentos e muito mais.",
    link: "https://www.mercadolivre.com.br/presentes/residencia-inclusiva-b6p0q",
    icon: Gift,
    button: "Ver lista de necessidades",
  },
  {
    title: "Empresas Parceiras",
    description:
      "Associe sua marca à nossa causa. Juntos, podemos gerar um impacto social ainda maior.",
    link: "sobre",
    icon: Building,
    button: "Saiba mais",
  },
];

const ComoAjudar = () => {
  return (
    <section id="como-ajudar">
      {/* ESTILO GLOBAL: Fundo radial importado da página Sobre */}
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />

      {/* --- Seção de Introdução --- */}
      <div className="text-center mb-16 px-4 py-16 md:px-4 flex flex-col justify-center items-center min-h-[60vh] bg-blue-50/80">
        <div className="max-w-3xl">
          <Heart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Sua Ajuda Transforma Vidas
          </h1>
          <p className="text-xl text-slate-800 leading-relaxed">
            Cada contribuição, seja de tempo, recursos ou divulgação, nos ajuda
            a construir uma sociedade mais justa e inclusiva para todos. Veja
            como você pode fazer parte.
          </p>
        </div>
      </div>

      {/* Container principal para o conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* --- Seção Destaque: Doação PIX --- */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-24 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Faça uma Doação via PIX
          </h2>
          <p className="text-muted-foreground mb-6">
            A forma mais rápida e segura de nos ajudar a continuar nosso
            trabalho.
          </p>
          <div className="flex justify-center mb-6">
            {/* Lembre-se de gerar e colocar o seu QR Code real aqui */}
            <img
              src="https://placehold.co/200x200?text=QR+Code+PIX"
              alt="QR Code PIX"
              className="rounded-lg"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            Ou use nossa chave CNPJ:
          </p>
          <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-50 p-3 rounded-lg">
            <span className="font-mono text-lg text-primary mr-4">
              35.472.651.0001/69
            </span>
            {/* A lógica de copiar para a área de transferência precisaria de um hook do React, mas o botão já está aqui */}
            <Button variant="ghost" size="icon">
              <Copy className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* --- Grid com Outras Formas de Ajudar --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {dataHelp.map((item, index) => (
            <div key={index}>
              <Card
                title={item.title}
                children={<item.icon className="h-8 w-8 text-blue-400" />}
                description={item.description}
                bLink={item.link}
                bTitle={item.button}
              />
            </div>
          ))}
        </div>

        {/* --- Seção de Perguntas Frequentes (FAQ) --- */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="p-4 rounded-lg bg-white/50 dark:bg-slate-50 open:shadow-lg transition-shadow"
              >
                <summary className="font-semibold cursor-pointer text-lg text-primary">
                  {item.question}
                </summary>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoAjudar;
