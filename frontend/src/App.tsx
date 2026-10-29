import { useState } from "react";
import ClienteApi from "./components/ClienteApi";
import ClientePython from "./components/ClientePython";

type TabType = "python" | "api";

const App = () => {
  const [activeTab, setActiveTab] = useState<TabType>("python");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Painel Simples de APIs</h1>

      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <button onClick={() => setActiveTab("python")}>Clientes Python</button>
        <button onClick={() => setActiveTab("api")}>Clientes API</button>
      </div>

      {activeTab === "python" ? <ClientePython /> : <ClienteApi />}
    </div>
  );
};

export default App;
