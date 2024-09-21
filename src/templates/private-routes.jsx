import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth/auth";
import styles from '../components/header/styles.module.css'
import { User } from 'lucide-react'
import Navbar from "../components/navbar/navbar";

export function TemplatePrivateRoute() {
    const { user } = useAuth()

    return user ? (
        <>
            <div className={`${styles.header} bg-dark-subtle`}>
                <h4 className='text-primary'>Viagem365</h4>
                <div className={styles.icons}>
                    <span className="text-primary"><User />{user.nome}</span>
                </div>
            </div>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    ) : <Navigate to='/dashboard'></Navigate>
}