import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import CadastroPage from "../pages/cadastro/Cadastro";
import { TemplatePrivateRoute } from '../templates/private-routes'
import Dashboard from "../pages/dashboard/dashboard";
import ListaDestinosPage from "../pages/listaDestinos/listaDestinos";

function RoutesApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage></LoginPage>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/cadastro" element={<CadastroPage></CadastroPage>}></Route>
                <Route path="/listar-destinos" element={<ListaDestinosPage></ListaDestinosPage>}></Route>

                <Route path="/dashboard" element={<TemplatePrivateRoute></TemplatePrivateRoute>}>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                </Route>

            </Routes>
        </>
    )
}

export default RoutesApp