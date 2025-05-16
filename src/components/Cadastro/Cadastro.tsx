export default function Cadastro() {
  return (
    <div className="flex items-center justify-center bg-zinc-900">
      <form className="bg-zinc-800 p-6 rounded shadow-md w-450 container mt-20">
        <h2 className="text-4xl text-center font-bold mb-6">Cadastro de Ocorrências</h2>
        
        <input
          type="date"
          placeholder="Insira a data"
          className="w-full p-2 border rounded mb-7"
          required
        />
        <input
          type="time"
          placeholder="Insira a hora"
          className="w-full p-2 border rounded mb-4"
          required
        />

        <input
          type="text"
          placeholder="Insira o local da ocorrência"
          className="w-full p-2 border rounded mb-7"
          required
        />
        <input
          type="text"
          placeholder="tipo de ocorrência"
          className="w-full p-2 border rounded mb-7"
          required
        />
        <input
          type="text"
          placeholder="descrição"
          className="w-full p-2 border rounded mb-7"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

// {
//   "tipo": "Furto",
//   "descricao": "Furto de bicicleta em frente à escola",
//   "data": "2025-05-16T14:30:00Z",
//   "latitude": -23.55052,
//   "longitude": -46.633308,
//   "endereco": "Rua Exemplo, 123 - Centro"
// }