import { Metadata } from "next";
import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "APDESP - Login",
  description: "Acesse a plataforma restrita da APDESP.",
};

const LoginPage = () => {
  return (
    <section className="min-h-screen">
      <div
        className="fixed inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.1),transparent)]"
        aria-hidden="true"
      />

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-blue-600 to-blue-800 lg:flex flex-col items-center justify-center p-12 text-white">
          <div className="flex flex-col items-center text-center">
            <User className="h-24 w-24 mb-6" />
            <h2 className="text-4xl font-bold mb-4">Bem-vindo(a) de volta!</h2>
            <p className="text-xl max-w-md">
              Sua plataforma de gestão e apoio à inclusão.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white p-8 sm:p-12">
          <div className="w-full max-w-md">
            <h1 className="mb-2 text-3xl font-bold text-blue-600">
              Acessar Plataforma
            </h1>
            <p className="mb-8 text-slate-600">
              Entre com suas credenciais para continuar.
            </p>

            <form className="space-y-6">
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Senha
                  </label>
                  <Link
                    href="/recuperar-senha"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-transparent py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Entrar
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              Ainda não tem uma conta?{" "}
              <Link
                href="/administrativo/cadastro"
                className="font-medium text-blue-600 hover:underline"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
