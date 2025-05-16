export default function Cadastro() {
  return (
    <div className="flex items-center justify-center bg-zinc-900">
      <form className="bg-zinc-800 p-6 rounded shadow-md w-450 container mt-20">
        <h2 className="text-4xl text-center font-bold mb-6">Cadastro de Ocorrências</h2>
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
        <input
          type="date"
          placeholder="Insira a data"
          className="w-full p-2 border rounded mb-7"
          required
        />
        {/* <input
          type="text"
          placeholder="Insira a latitude"
          className="w-full p-2 border rounded mb-7"
          required

        />
        <input
          type="text"
          placeholder="Insira a longitude"
          className="w-full p-2 border rounded mb-7"
          required
        /> */}
        <input
          type="text"
          placeholder="Insira o endereço"
          className="w-full p-2 border rounded mb-7"
          required
        />
        
        
        <button type="submit" className="w-full bg-zinc-700 hover:bg-zinc-500 text-2xl text-white py-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
// fazer o botão de cadastrar funcionar 
// e o cadastro aparecer em outra pagina com mapa