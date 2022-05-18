import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import AlunosLista from './components/AlunosLista';
import AlunoInfo from './components/AlunoInfo.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlunosLista />} />
        <Route path="/aluno/:alunoNome" element={<AlunoInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
