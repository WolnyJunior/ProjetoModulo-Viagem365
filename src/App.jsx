
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/dashboard"
import LoginPage from "./pages/login/LoginPage"
import CadastroPage from "./pages/cadastro/Cadastro"
import ListaDestinosPage from "./pages/listaDestinos/listaDestinos"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" Component={Dashboard}></Route>
          <Route path="/" Component={LoginPage}></Route>
          <Route path="/login" Component={LoginPage}></Route>
          <Route path="/cadastro" Component={CadastroPage}></Route>
          <Route path="/listar-destinos" Component={ListaDestinosPage}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
