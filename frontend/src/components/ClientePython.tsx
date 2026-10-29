import { useState } from "react";

type Cliente = {
  id: number;
  nome: string;
  email: string;
};

const ClientePython = () => {
  const [clientes, setClientes] = useState<Cliente[]>([
    { id: 1, nome: "Huginho", email: "huginho@email.com" },
    { id: 2, nome: "Luluzinha", email: "luluzinha@email.com" },
  ]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const adicionarCliente = () => {
    if (!nome.trim() || !email.trim()) return;

    const novoCliente: Cliente = {
      id: Date.now(),
      nome: nome.trim(),
      email: email.trim(),
    };

    setClientes((listaAtual) => [...listaAtual, novoCliente]);
    setNome("");
    setEmail("");
  };

  return (
    <section>
      <h2>Clientes em Python</h2>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button onClick={adicionarCliente}>Cadastrar</button>
      </div>

      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <strong>{cliente.nome}</strong> - {cliente.email}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClientePython;
