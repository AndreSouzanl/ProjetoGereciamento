import Cadastro from "@/components/Cadastro/Cadastro";
import Header from "@/components/Header/Header";
import Rodape from "@/components/Rodape/Rodape";



// app/home/page.tsx

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="flexjustify-between items-start mb-4">
        <Header />
      </div>
      <Cadastro />
       <Rodape />
    </div>
  );
}
