import { StaticImageData } from "next/image";

// --- 1. IMPORTAÇÃO DAS IMAGENS ---
// Importamos cada imagem do projeto. Isso nos dá um objeto especial para cada uma.
import predioImg from "@/assets/residencia-inclusiva/predio.jpg";
import galeriaApdespImg from "@/assets/residencia-inclusiva/apdesp.jpg";
import galeriaCozinhaImg from "@/assets/residencia-inclusiva/cozinha.jpg";
import galeriaInauguracaoImg from "@/assets/residencia-inclusiva/inauguracao.jpg";
import galeriaQuartoImg from "@/assets/residencia-inclusiva/quarto.jpg";
import galeriaPredioImg from "@/assets/residencia-inclusiva/residencia-predio.jpg";

import libras from "@/assets/libras/libras.jpg";
import libras1 from "@/assets/libras/libras1.jpg";

import idoso from "@/assets/idoso/idoso.jpg";
import idoso1 from "@/assets/idoso/idoso1.jpg";
import idoso2 from "@/assets/idoso/idoso2.jpg";
import idoso3 from "@/assets/idoso/idoso3.jpg";
import idoso4 from "@/assets/idoso/idoso4.jpg";
import idoso5 from "@/assets/idoso/idoso5.jpg";

// --- 2. ATUALIZAÇÃO DA INTERFACE ---
// A 'interface' agora espera o tipo 'StaticImageData' para as imagens.
export interface Project {
  slug: string;
  title: string;
  date: string;
  imageUrl: StaticImageData;
  description: string;
  fullContent: string;
  gallery: StaticImageData[];
}

// --- 3. USO DAS IMAGENS IMPORTADAS ---
// Este é o nosso "banco de dados" de projetos, agora usando as variáveis das imagens.
export const projects: Project[] = [
  {
    slug: "residencia-inclusiva",
    title: "Residência Inclusiva",
    date: "2025-10-07",
    imageUrl: predioImg,
    description:
      "APDESP inaugura primeira Residência Inclusiva em Assis e amplia seu compromisso com a inclusão e a autonomia das pessoas com deficiência",
    fullContent:
      "A Associação das Pessoas com Deficiência do Estado de São Paulo (APDESP) tem um novo motivo para celebrar: foi inaugurada, em Assis (SP), a primeira Residência Inclusiva da instituição — um marco que a torna pioneira em um raio de 25 municípios da região.\n\n O espaço foi criado para oferecer acolhimento e cuidado especializado a pessoas com deficiência (PcD) entre 18 e 59 anos, em situação de vulnerabilidade social. Mais do que um local de moradia, a Residência Inclusiva é um ambiente de desenvolvimento, autonomia e inclusão, onde cada morador recebe apoio de uma equipe técnica preparada para atender suas necessidades de forma personalizada.\n\n Com estrutura física totalmente adaptada, o serviço faz parte da rede de alta complexidade do SUAS (Sistema Único de Assistência Social) e oferece acompanhamento social, psicológico, fisioterapêutico, jurídico e nutricional, além de promover atividades de lazer e convivência inclusiva.\n\n “Nosso principal objetivo com toda essa estrutura de apoio integral é promover empoderamento e pertencimento social às pessoas atendidas, para que elas tenham dignidade, autonomia, segurança e melhores perspectivas de qualidade de vida”, destaca o presidente da APDESP.\n\n A nova Residência Inclusiva reforça o compromisso da APDESP com a inclusão social e o fortalecimento dos direitos das pessoas com deficiência, ampliando oportunidades e construindo um futuro mais acessível, justo e humano para todos.",
    gallery: [
      galeriaApdespImg,
      galeriaCozinhaImg,
      galeriaInauguracaoImg,
      galeriaQuartoImg,
      galeriaPredioImg,
    ],
  },
  {
    slug: "curso-libras",
    title: "Curso de Libras Básico",
    date: "2025-10-07",
    imageUrl: libras,
    description:
      "APDESP promove Curso de Libras Básico e fortalece a comunicação inclusiva na comunidade.",
    fullContent:
      "Com o propósito de ampliar a acessibilidade e fortalecer a inclusão social, a Associação das Pessoas com Deficiência do Estado de São Paulo (APDESP) realizou o Curso de Libras – Nível Básico, com encontros presenciais semanais. A iniciativa teve como principal objetivo capacitar a comunidade para o uso básico da Língua Brasileira de Sinais (Libras), promovendo uma comunicação mais acessível e respeitosa com pessoas surdas.\n Durante o curso, os participantes aprenderam conceitos e sinais fundamentais de Libras, além de refletirem sobre a importância da comunicação acessível no convívio social, educacional e profissional. A formação também buscou sensibilizar a sociedade para o papel essencial da Libras na inclusão e na quebra de barreiras comunicacionais.\n Os resultados foram altamente positivos: os participantes concluíram o curso aptos a se comunicar de forma básica em Libras, demonstrando maior consciência sobre inclusão e acessibilidade comunicacional. A atividade também estreitou o vínculo entre a comunidade e a APDESP, incentivando novas ações voltadas ao fortalecimento dos direitos e da participação das pessoas com deficiência.\n Com mais esta iniciativa, a APDESP reafirma seu compromisso com a promoção da inclusão, da comunicação acessível e da valorização da diversidade, contribuindo para uma sociedade mais empática, justa e verdadeiramente inclusiva.",
    gallery: [libras, libras1],
  },
  {
    slug: "curso-cuidado-de-idoso",
    title: "Curso de Cuidador de Idosos e Deficientes",
    date: "2025-10-07",
    imageUrl: idoso,
    description:
      "APDESP promove curso de Cuidador de Idosos e Pessoas com Deficiência e fortalece a formação humanizada no cuidado.",
    fullContent:
      "Com o compromisso de promover inclusão, dignidade e qualidade de vida, a Associação das Pessoas com Deficiência do Estado de São Paulo (APDESP) realizou o Curso de Cuidador de Idosos e Pessoas com Deficiência, uma iniciativa voltada à formação teórica e prática de cuidadores, familiares e profissionais interessados em aprimorar seus conhecimentos sobre o ato de cuidar.\nO curso abordou temas fundamentais como higiene, cuidados básicos, mobilidade, apoio emocional, comunicação e psicologia, proporcionando uma visão ampla e sensível sobre o cuidado humanizado. Mais do que técnicas, os participantes aprenderam a importância da empatia, do respeito e da escuta ativa no dia a dia com pessoas idosas e com deficiência.\nEntre os principais objetivos da formação estão preparar os participantes para lidar com situações cotidianas, garantir segurança e bem-estar às pessoas cuidadas e fortalecer o papel do cuidador como agente de inclusão social.\nOs resultados foram expressivos: os participantes saíram capacitados para oferecer cuidados com responsabilidade, acolhimento e sensibilidade, contribuindo para a melhoria da qualidade do atendimento e para uma sociedade mais justa e solidária.\nA APDESP reafirma, com esta iniciativa, seu compromisso com a formação de profissionais e familiares conscientes da importância do cuidado com respeito, empatia e amor — valores essenciais para a construção de uma comunidade verdadeiramente inclusiva.",
    gallery: [idoso, idoso1, idoso2, idoso3, idoso4, idoso5],
  },
];
