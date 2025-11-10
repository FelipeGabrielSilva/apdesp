import { Metadata } from "next";
import Link from "next/link";
import { Mail, Lock, User, Phone, Badge } from "lucide-react";

export const metadata: Metadata = {
  title: "APDESP - Cadastro de usuário",
  description: "Crie uma nova conta na plataforma administrativa.",
};

const CadastroPage = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center p-4 py-12">
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-blue-600">
            Criar Nova Conta
          </h1>
          <p className="mb-8 text-slate-600">
            Preencha seus dados para se cadastrar.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Nome Completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome completo"
                required
                className="w-full rounded-lg border border-slate-300 bg-transparent py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="w-full rounded-lg border border-slate-300 bg-transparent py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Crie uma senha forte"
                required
                className="w-full rounded-lg border border-slate-300 bg-transparent py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Telefone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                required
                className="w-full rounded-lg border border-slate-300 bg-transparent py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              CPF
            </label>
            <div className="relative">
              <Badge className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="cpf"
                name="cpf"
                type="text"
                placeholder="XXX.XXX.XXX-XX"
                required
                className="w-full rounded-lg border border-slate-300 bg-transparent py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 !mt-8"
          >
            Criar Conta
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Faça login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CadastroPage;
