/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

type Ocorrencia = {
  tipo: string;
  descricao: string;
  data: string;
  endereco: string;
  bairro: string;
  lat?: number;
  lon?: number;
};

export default function OcorrenciasPage() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("ocorrencias");
    const dados: Ocorrencia[] = stored ? JSON.parse(stored) : [];
    setOcorrencias(dados);
  }, []);

  // Agrupar por tipo (sem considerar bairro)
  const ocorrenciasPorTipo = ocorrencias.reduce((acc: any, curr) => {
    const tipo = curr.tipo;
    if (!acc[tipo]) {
      acc[tipo] = {
        count: 1,
        exemplo: curr,
      };
    } else {
      acc[tipo].count += 1;
    }
    return acc;
  }, {});

  // Dados para o gráfico (apenas por tipo)
  const chartData = {
    labels: Object.keys(ocorrenciasPorTipo),
    datasets: [
      {
        label: "Ocorrências por Tipo",
        data: Object.values(ocorrenciasPorTipo).map((item: any) => item.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center my-4 text-white">
        Lista Ocorrências
      </h2>

      <div className="flex w-full h-[90%] justify-between items-start space-x-4 p-4">
        {/* Lista completa das ocorrências (não agrupada) */}
        <div className="w-1/3 bg-black p-4 rounded shadow-md h-full overflow-auto text-white">
          <h3 className="text-2xl font-semibold mb-4">Lista de Ocorrências</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
            <a href="/home">Cadastrar Ocorrência</a>
          </button>
          <ul>
            {ocorrencias.map((ocorrencia, index) => (
              <li key={index} className="mb-4 p-2 border-b border-gray-600">
                <strong>{ocorrencia.tipo}</strong><br />
                {ocorrencia.descricao}<br />
                <small>{ocorrencia.data} - {ocorrencia.endereco}</small><br />
                <small><strong>Bairro:</strong> {ocorrencia.bairro}</small>
              </li>
            ))}
          </ul>
        </div>

        {/* Gráfico de Pizza por tipo */}
        <div className="w-full flex flex-col items-center justify-center bg-black p-4 rounded shadow-md h-full text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Gráfico de Ocorrências por Tipo
          </h3>
          <Pie data={chartData} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
