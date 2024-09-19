import { createContext, useContext, useState } from "react";

const urlDaAPI = 'http://localhost:3000/usuarios'

export const AuthContext = createContext({
    user: null,
    signIn: async () => { }
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    async function signIn(email, senha) {
        try {
            console.log('Buscando usuários...');

            const response = await fetch(`${urlDaAPI}usuarios?email=${email}&senha=${senha}`)
            
            if(!response.ok){
                throw new Error('Erro ao buscar usuário.')
            }

            const data = await response.json()
            console.log('Usuários encontrados:', usuarios);

            if (data.length > 0) {
                const usuario = data[0];
                setUser(usuario);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Erro ao fazer login', error)
            return false
        }
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