/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

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

  // Agrupar por bairro (sem considerar tipo)
  const agrupado = ocorrencias.reduce((acc: any, curr) => {
    const { bairro, tipo } = curr;
    if (!acc[bairro]) acc[bairro] = {};
    if (!acc[bairro][tipo]) acc[bairro][tipo] = 0;
    acc[bairro][tipo] += 1;
    return acc;
  }, {});

  const bairros = Object.keys(agrupado);
  const tipos = Array.from(new Set(ocorrencias.map((o) => o.tipo)));

  const chartData = {
    labels: bairros,
    datasets: tipos.map((tipo, i) => ({
      label: tipo,
      data: bairros.map((bairro) => agrupado[bairro][tipo] || 0),
      backgroundColor: `rgba(${50 + i * 40}, ${100 + i * 30}, 200, 0.6)`,
      borderColor: `rgba(${50 + i * 40}, ${100 + i * 30}, 200, 1)`,
      borderWidth: 1,
    })),
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

          <a
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            href="/home"
          >
            ← Voltar
          </a>
        

          <ul>
            {ocorrencias.map((ocorrencia, index) => (
              <li key={index} className="mb-4 p-2 border-b border-gray-600">
                <strong>{ocorrencia.tipo}</strong>
                <br />
                {ocorrencia.descricao}
                <br />
                <small>
                  {ocorrencia.data} - {ocorrencia.endereco}
                </small>
                <br />
                <small>
                  <strong>Bairro:</strong> {ocorrencia.bairro}
                </small>
              </li>
            ))}
          </ul>
        </div>

        {/* Gráfico de Pizza por bairro */}
        <div className="w-full flex flex-col items-center justify-center bg-black p-4 rounded shadow-md h-full text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Gráfico de Ocorrências por Bairro e Tipo
          </h3>
          <div className="flex items-center  justify-center w-full h-full">
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Ocorrências por Bairro e Tipo",
                  },
                  legend: {
                    position: "top",
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      autoSkip: false,
                      maxRotation: 45,
                      minRotation: 45,
                      font: {
                        size: 12,
                      },
                    },
                  },
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
