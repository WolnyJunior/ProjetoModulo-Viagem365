import { LogOut, User, Earth } from 'lucide-react'
import { useAuth } from '../../contexts/auth/auth'
import styles from './styles.module.css'

function Card() {
    const { user, signOut } = useAuth()

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.userCard} bg-primary-subtle text-secondary`}>
                    <h4>Usuário</h4>
                    <span>Gui ou turista</span>
                    <div className={styles.icons}>
                        <span><User /></span>
                    </div>
                </div>
                <div className={`${styles.userCard} bg-primary-subtle text-secondary`}>
                    <h4>Passeios</h4>
                    <span>Quantidade de passeios</span>
                    <div className={styles.icons}>
                        <span><Earth /></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card