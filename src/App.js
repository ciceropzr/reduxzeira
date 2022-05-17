import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AlunosLista from './components/AlunosLista';
import AlunoInfo from './components/AlunoInfo.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/aluno/:alunoNome">
          <AlunoInfo />
        </Route>
        <Route exact path="/home">
          <AlunosLista />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
