import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  children: any;
  title: string;
  description: string;
  bTitle?: string;
  bLink?: string;
}

const Card: React.FC<Props> = ({
  children,
  title,
  description,
  bTitle,
  bLink,
}) => {
  return (
    <div className="group flex flex-col items-center text-center p-8 border border-white/20 bg-white backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
      {/* O círculo do ícone permanece o mesmo, pois já usava Tailwind puro */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-200 group-hover:bg-blue-950 mb-6 transition-colors duration-300">
        {children}
      </div>

      {/* DE: <CardTitle>
          PARA: <h3> - Título do card. */}
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>

      {/* DE: <CardDescription>
          PARA: <p> - Descrição do card. */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {bTitle ? (
        <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          <Link
            href={bLink ? bLink : ""}
            className="flex items-center justify-center"
            target="_blank"
          >
            {bTitle}
          </Link>
        </Button>
      ) : null}
    </div>
  );
};

export default Card;
