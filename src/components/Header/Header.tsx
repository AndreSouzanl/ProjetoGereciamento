import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-zinc-800 p-4 rounded-lg shadow-md">
       <div>
          <h1 className="text-3xl font-bold">Painel de Ocorrências</h1>
          <p className="mt-1 text-white">
            Bem-vindo ao sistema de gerenciamento de ocorrências.
          </p>
          {/* Link alinhado à direita */}
        
        </div>
        <div>
          <Link
          href="/"
          className="bg-zinc-700 text-white px-4 py-2 rounded hover:bg-zinc-500 transition"
        >
          ← Sair
        </Link>
        </div>
    </header>
  );
}