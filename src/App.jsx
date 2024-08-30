import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Card from "./components/Card";
import Filtro from "./components/Filtro";
import Ordenacao from "./components/Ordenacao";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
