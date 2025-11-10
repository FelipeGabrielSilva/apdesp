import { FileText, Heart, Plus, Shield, Users } from "lucide-react";
import Link from "next/link";

const DashboardHomePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Bem-vindo, Administrador!
        </h1>
        <p className="text-lg text-slate-600">
          Gerencie as atividades da APDESP de forma centralizada.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 space-y-8 lg:space-y-0">
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Resumo</h2>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">
                Pessoas Atendidas
              </h3>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">140</span>
              <p className="text-xs text-green-600">+5 na última semana</p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">
                Projetos Ativos
              </h3>
              <FileText className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">3</span>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">
                Voluntários
              </h3>
              <Heart className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">37</span>
              <p className="text-xs text-green-600">+2 esta semana</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Ações Rápidas</h2>

          <Link href="/administrativo/projetos/novo">
            <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover-blue-300">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg text-slate-800">
                  Adicionar Projeto
                </span>
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Crie um novo projeto para exibir no site público.
              </p>
            </div>
          </Link>

          <Link href="/administrativo/transparencia/novo">
            <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover-blue-300">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg text-slate-800">
                  Publicar Documento
                </span>
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Envie relatórios e balanços para a página de transparência.
              </p>
            </div>
          </Link>

          <Link href="/administrativo/voluntarios">
            <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover-blue-300">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg text-slate-800">
                  Gerenciar Voluntários
                </span>
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Veja a lista de voluntários e gerencie suas permissões.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
