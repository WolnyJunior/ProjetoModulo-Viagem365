import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth/auth";

const BuscasContext = createContext()

export function BuscasProvider({ children }) {
    const { user } = useAuth();
    const [locais, setLocais] = useState([])
    const [usuarios, setUsuarios] = useState(0)

    useEffect(() => {
        async function buscarLocais() {
            try {
                const response = await fetch('http://localhost:3000/destinos')
                if (response.ok) {
                    const data = await response.json()
                    setLocais(data)
                } else {
                    console.error('ERRO! Destino não encontrado.')
                }
            } catch (error) {
                console.error('Erro ao buscar destino.', error)
            }
        }

        async function buscarUsuarios() {
            try {
                const response = await fetch('http://localhost:3000/usuarios')
                if (response.ok) {
                    const data = await response.json()
                    setUsuarios(data)
                    // console.log(data)
                } else {
                    console.error('ERRO! Usuário não encontrado.')
                }

            } catch (error) {
                console.error('Erro ao buscar usuário.', error)

            }
        }
        buscarLocais()
        buscarUsuarios()
    }, [])
    return (
        <BuscasContext.Provider value={{ locais, usuarios }}>
            {children}
        </BuscasContext.Provider>
    )
}

export function useBuscas() {
    const contexto = useContext(BuscasContext)
    return contexto
}