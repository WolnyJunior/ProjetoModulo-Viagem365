import { LogOut, User } from 'lucide-react'
import { useAuth } from '../../contexts/auth/auth'
import styles from './styles.module.css'
import Navbar from '../navbar/navbar'

function Header() {
    const { user, signOut } = useAuth()

    return (
        <>
            <div className={`${styles.navbar} bg-dark-subtle`}>
                <h4 className='text-secondary'>Viagem365</h4>
                <div className={styles.icons}>
                    <span className="text-secondary"><User /></span>
                    <button className="btn btn-secondary"><LogOut /></button>
                </div>
            </div>
                <Navbar></Navbar>
        </>
    )
}

export default Header