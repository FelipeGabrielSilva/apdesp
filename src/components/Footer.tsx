import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-section border-t border-gray-200">
      <div className="container mx-auto p-8  sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-32">
          {/* Sobre a APDESP */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">APDESP</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Associação dedicada ao apoio e inclusão de pessoas com
              deficiência, promovendo autonomia, dignidade e oportunidades
              iguais para todos.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Rua Smith Vasconcelos, 691</p>
                  <p>Centro - ASSIS, SP</p>
                  <p>CEP: 19814-010</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +55 (18) 99716-3583
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  contato@apdesp.org.br
                </span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Links Úteis</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="/sobre"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                style={{ width: "15%" }}
              >
                Sobre
              </a>
              <a
                href="/transparencia"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                style={{ width: "30%" }}
              >
                Transparência
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                style={{ width: "15%" }}
              >
                Projetos
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                style={{ width: "30%" }}
              >
                Como Ajudar
              </a>
            </nav>
          </div>

          {/* Redes Sociais e Mapa */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Siga-nos</h3>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Link href="https://www.facebook.com/APDESP/">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Link href="https://www.instagram.com/apdesp08/">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>

              {/*
              <Button variant="ghost" size="icon" className="rounded-full">
                <Link href="https://www.google.com">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              */}
            </div>

            {/* Mapa placeholder */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-32 bg-gradient-card flex items-center justify-center">
                <div className="text-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.8113792861354!2d-50.41443122484662!3d-22.660820179428995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94953998e9ba0941%3A0x2375174789968747!2sR.%20Smith%20Vasconcelos%2C%20691%20-%20Centro%2C%20Assis%20-%20SP%2C%2019814-010!5e0!3m2!1spt-BR!2sbr!4v1758046664337!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Localização da APDESP"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-4 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} APDESP Assis. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
