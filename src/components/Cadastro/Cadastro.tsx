"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({
    tipo: "",
    descricao: "",
    data: "",
    endereco: "",
    bairro: ""
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Salvar no localStorage
    const stored = localStorage.getItem("ocorrencias");
    const dados = stored ? JSON.parse(stored) : [];
    dados.push(form);
    localStorage.setItem("ocorrencias", JSON.stringify(dados));

    // Redirecionar para a página de ocorrências
    router.push("/lista");
  };

 
  const limparLocalStorage = () => {
    localStorage.clear();  // Limpa todo o localStorage
    alert("localStorage limpo!");
  };

  const listaOcorrencias = () => {
    router.push("/lista");
  }
  
  return (
    <div className="flex items-center justify-center bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-6 rounded shadow-md w-450 container mt-20"
      >
        <h2 className="text-4xl text-center font-bold mb-6">
          Cadastro de Ocorrências
        </h2>
        <input
          name="tipo"
          type="text"
          placeholder="tipo de ocorrência"
          className="w-full p-2 border rounded mb-7"
          value={form.tipo}
          onChange={handleChange}
          required
        />
        <input
          name="descricao"
          type="text"
          placeholder="descrição"
          className="w-full p-2 border rounded mb-7"
          value={form.descricao}
          onChange={handleChange}
          required
        />
        <input
          name="data"
          type="date"
          placeholder="Insira a data"
          className="w-full p-2 border rounded mb-7"
          value={form.data}
          onChange={handleChange}
          required
        />

        <input
          name="endereco"
          type="text"
          placeholder="Insira o endereço"
          className="w-full p-2 border rounded mb-7"
          value={form.endereco}
          onChange={handleChange}
          required
        />
        <input
          name="bairro"
          type="text"
          placeholder="Insira o bairro"
          className="w-full p-2 border rounded mb-7"
          value={form.bairro}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-zinc-700 hover:bg-zinc-500 text-2xl text-white py-2 rounded"
        >
          Cadastrar
        </button>

        <button
          onClick={limparLocalStorage}
         className="w-full bg-zinc-700 hover:bg-red-500 text-2xl text-white py-2 rounded mt-4"
        >
          localStorage
        </button>
        <button
          onClick={listaOcorrencias}
          className="w-full bg-zinc-700 hover:bg-blue-500 text-2xl text-white py-2 rounded mt-4" >
          Lista de Ocorrências
          </button>
      </form>
    </div>
  );
}
// acertar as duplicidades na lista de ocorrências
//refatorações em geral 