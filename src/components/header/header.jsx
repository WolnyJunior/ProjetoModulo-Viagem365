import { User } from 'lucide-react'
import { useAuth } from '../../contexts/auth/auth'
import styles from './styles.module.css'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

function Header() {
    const { user } = useAuth()

    return (
        <>
            <div className={`${styles.header} bg-dark-subtle`}>
                <Link to='/dashboard' className='nav-link'><h4 className='text-secondary'>Viagem365</h4></Link>
                <div className={styles.icons}>
                    <span className="text-secondary"><User /></span>
                </div>
            </div>
        </>
    )
}

export default Header