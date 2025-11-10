import { Button } from "@/components/ui/button";
import { projects } from "@/data/Projetos";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "APDESP - Projetos",
  description:
    "Conheça os projetos e iniciativas da APDESP que estão transformando vidas e promovendo a inclusão.",
};

const ProjetosPage = () => {

  return (
    <section id="projetos">
      {/* Fundo Global Consistente */}
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />

      {/* --- Cabeçalho da Página --- */}
      <div
        className="text-center pt-24 pb-16 px-4 bg-blue-50/80 min-h-[60vh]"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl text-slate-800 leading-relaxed">
            Cada projeto é um passo em direção a uma sociedade mais inclusiva.
            Conheça as iniciativas que movem a APDESP.
          </p>
        </div>
      </div>

      {/* --- Grid de Cards dos Projetos --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* MUDANÇA: Adicionamos o .map() para iterar sobre o array de projetos */}
          {projects.map((project) => (
            <div
              key={project.slug} // A 'key' agora está no elemento pai do map
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.title}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-6 line-clamp-3">
                  {project.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  <Link href={`/projetos/${project.slug}`}>Saiba Mais</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosPage;
