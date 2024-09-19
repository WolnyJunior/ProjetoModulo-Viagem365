import { createContext, useContext, useState } from "react";

const urlDaAPI = 'http://localhost:3000/'

export const AuthContext = createContext({
    user: null,
    signIn: async () => { },
    signOut: () => { }
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const usuarioLogado = localStorage.getItem('@viagem365-storage')
        if (usuarioLogado) {
            return JSON.parse(usuarioLogado)
        }
        return null
    })

    async function signIn(data) {
        try {
            const response = await fetch(`${urlDaAPI}users?email=${email}&senha=${senha}`)
            if (!response.ok) {
                throw new Error('Erro ao buscar usuário.')
            }

            const userResponse = {
                id: Date.now(),
                nome: data.nome,
                email: data.email
            }
            setUser(userResponse)
            localStorage.setItem('@viagem365-storage', JSON.stringify(userResponse))
            localStorage.setItem('@viagem365:token', Date.now())

            const data = await response.json()

            if (data.length > 0) {
                const usuario = data[0]
                setUser(usuario)
                return true
            } else {
                return false
            }


        } catch (error) {
            console.error('Erro ao fazer login', error)
            return false
        }
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@lab365:userLogger')
        localStorage.removeItem('@lab365:token')
    }

    return (
        <AuthProvider.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthProvider.Provider>
    )
}

export function useAuth() {
    const contexto = useContext(AuthContext)
    return contexto
}