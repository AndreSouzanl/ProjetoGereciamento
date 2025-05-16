// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login válido
    if (email && senha) {
      router.push('/home');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <form onSubmit={handleLogin} className="bg-zinc-800 p-6 rounded shadow-md w-120">
        <h2 className="text-4xl text-center font-bold mb-6">Login</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-7"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
