import { Lightbulb, Shield, Target, Users } from "lucide-react";
import Image from "next/image";
import sedeApdesp from "@/assets/sede-apdesp.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Promover a inclusão e a equidade para pessoas com deficiência, fornecendo suporte integral, recursos e oportunidades que fomentem seu desenvolvimento pessoal, social e profissional.",
    },
    {
      icon: Users,
      title: "Visão",
      description:
        "Imaginamos um mundo onde pessoas com deficiência possam viver plenamente e com dignidade, integradas em todas as esferas da sociedade, onde cada indivíduo tenha a liberdade e as oportunidades necessárias para alcançar seu pleno potencial.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description:
        "Acreditamos que a diversidade enriquece a sociedade. Nos comprometemos a garantir que todas as vozes sejam ouvidas e que cada pessoa com deficiência tenha acesso a oportunidades e recursos.",
    },
  ];

  return (
    <section id="Sobre">
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />
      {/* --- Seção de Introdução (sem alterações) --- */}
      <div
        className="text-center mb-16 px-4 py-16 md:px-4 flex flex-col justify-center items-center min-h-[60vh]"
        style={{ background: "#eff6ff", opacity: 80 }}
      >
        <div className="max-w-3xl">
          {" "}
          {/* Wrapper para controlar a largura do texto */}
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ color: "#4285f4" }}
          >
            Sobre a <span className="text-gradient">APDESP</span>
          </h2>
          <p
            className="text-xl text-slate-200 leading-relaxed"
            style={{ color: "#263f50" }}
          >
            A APDESP é uma associação que atua na promoção da inclusão e
            integração social de pessoas com diversas deficiências, como física,
            auditiva, visual, intelectual e autismo.
          </p>
        </div>
      </div>

      {/* --- Seção de História (sem alterações) --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20 mx-auto sm:px-4 lg:px-16 min-h-[60vh]">
        <div className="px-8 lg:px-16">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Nossa História
          </h3>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed text-justify">
            A APDESP (Associação de Pessoas com Deficiência do Estado de São
            Paulo) é uma organização sem fins lucrativos que atua há dois anos
            na cidade de Assis e região. Atualmente, a instituição oferece
            suporte a cerca de 140 pessoas com todos os tipos de deficiência,
            contando com a ajuda de 37 voluntários de diversas áreas.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
            Entre suas principais conquistas, destaca-se a criação da Residência
            Inclusiva, um projeto pioneiro na região que oferece moradia e
            autonomia para pessoas com deficiência em situação de
            vulnerabilidade social.
          </p>
        </div>
        <div className="relative p-8 sm:p-8 md:p-12 lg:p-16">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center sm:px-8 ">
            <Image
              src={sedeApdesp}
              alt="APDESP Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Valores (COM O CÓDIGO REFATORADO) --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-8 p-4 sm:p-8 md:p-12 lg:px-32 min-h-[60vh]">
        {values.map((value, index) => (
          // O <Card> e <CardContent> foram combinados neste único <div>.
          // Adicionamos padding (p-8), cantos arredondados (rounded-xl) e estilos de fundo/sombra.
          <div
            key={index}
            className="p-4 text-center rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6">
              <value.icon className="h-8 w-8" color="#263f50" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">
              {value.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sobre;
