import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/Projetos"; // Importa nosso "banco de dados"
import Image from "next/image";
import { Calendar } from "lucide-react";

// --- Função para buscar os dados de um projeto específico ---
function getProjectData(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  return project;
}

// Props que o Next.js passa para páginas dinâmicas
interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

// Gera metadados dinâmicos para SEO
export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectData(params.slug);
  if (!project) {
    return { title: "Projeto Não Encontrado" };
  }
  return {
    title: `Projeto: ${project.title} | APDESP`,
    description: project.description,
  };
}

// --- Componente Principal da Página ---
const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const project = getProjectData(params.slug);

  // Se o projeto com o slug da URL não for encontrado, exibe a página 404
  if (!project) {
    notFound();
  }

  // Função para formatar a data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section>
      {/* Fundo Global Consistente */}
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* --- Cabeçalho do Projeto --- */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              {project.title}
            </h1>
            <div className="flex items-center justify-center text-slate-500">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Publicado em: {formatDate(project.date)}</span>
            </div>
          </div>

          {/* --- Imagem Principal --- */}
          <div className="relative w-full h-56 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={project.imageUrl}
              alt={`Imagem principal do projeto ${project.title}`}
              fill
              style={{ objectFit: "cover" }}
              priority // Carrega a imagem principal com prioridade
            />
          </div>

          {/* --- Conteúdo Completo --- */}
          <div
            className="prose lg:prose-xl max-w-none mx-auto text-justify text-slate-700 dark:text-slate-300 mb-16"
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            {/* MUDANÇA AQUI: Quebramos a string e mapeamos para tags <p> */}
            {project.fullContent.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* --- Galeria de Imagens --- */}
          {project.gallery.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                Galeria de Fotos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={imgUrl}
                      alt={`Foto ${index + 1} da galeria do projeto ${
                        project.title
                      }`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
