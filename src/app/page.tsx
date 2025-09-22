import heroImage from "@/assets/hero-apdesp.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Phone, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Apoio Psicossocial",
      description: "Acompanhamento para bem-estar emocional e social.",
    },
    {
      icon: Users,
      title: "Inclusão Social",
      description: "Programas para promover a participação ativa na sociedade.",
    },
    {
      icon: Target,
      title: "Capacitação",
      description: "Cursos e treinamentos para desenvolvimento de habilidades.",
    },
    {
      icon: Award,
      title: "Direito",
      description: "Defesa dos direitos das pessoas com deficiência.",
    },
  ];

  return (
    <div>
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />
      {/* Hero Section */}
      {/* MUDANÇA: Trocamos h-150 por min-h-screen e adicionamos flex para centralizar */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden min-h-[60vh] flex flex-col items-center justify-center">
        {/* Camada da imagem de fundo - sem alterações */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Pessoas com deficiência em ambiente inclusivo"
            className="w-full h-full object-cover opacity-10 bg-gradient-hero"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        {/* MUDANÇA: Simplificamos a estrutura interna. O flexbox da section já centraliza tudo. */}
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Promovendo Inclusão e
              <span className="text-secondary-light"> Dignidade</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              A APDESP dedica-se ao apoio de pessoas com deficiência,
              construindo uma sociedade mais justa e inclusiva para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link
                  href="/sobre"
                  className="flex items-center justify-center"
                >
                  Conheça Nossa História
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                <Link
                  href="/transparencia"
                  className="flex items-center justify-center"
                >
                  Transparência
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* MUDANÇA: Também aplicamos min-h-screen e flex para consistência */}
      <section className="py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="container px-4 mx-auto sm:px-8 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos um conjunto abrangente de serviços focados na promoção
              da autonomia e qualidade de vida das pessoas com deficiência.
            </p>
          </div>

          {/* O seu grid responsivo já estava ótimo, mantivemos! */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 border border-white/20 bg-white backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl"
              >
                {/* O círculo do ícone permanece o mesmo, pois já usava Tailwind puro */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-200 group-hover:bg-blue-950 mb-6 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-400" />
                </div>

                {/* DE: <CardTitle>
          PARA: <h3> - Título do card. */}
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>

                {/* DE: <CardDescription>
          PARA: <p> - Descrição do card. */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* MUDANÇA: E o mesmo padrão aqui para a seção de CTA */}
      <section className="py-20 px-4 bg-gradient-sectionflex flex-col items-center justify-center min-h-[60vh]">
        <div className="container mx-auto text-center sm:px-8 lg:px-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Faça Parte da Nossa Missão
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sua colaboração é fundamental para continuarmos promovendo a
              inclusão e defendendo os direitos das pessoas com deficiência.
            </p>
            <div className="px-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center">
                Como Ajudar
                <Heart className="w-5 h-5 ml-2" />
              </Button>

              <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
