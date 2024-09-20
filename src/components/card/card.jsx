import { User, Earth } from 'lucide-react'
import styles from './styles.module.css'
import { useBuscas } from '../../contexts/busca'

function Card() {
    const { locais, usuarios } = useBuscas()

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.userCard} bg-primary-subtle text-secondary`}>
                    <h4>Usuário</h4>
                    <span>{usuarios ? `${usuarios.length} Usuarios` : 'Carregando...'}</span>
                    <div className={styles.icons}>
                        <span><User /></span>
                    </div>
                </div>
                <div className={`${styles.userCard} bg-primary-subtle text-secondary`}>
                    <h4>Passeios</h4>
                    <span>{locais ? `${locais.length} Locais` : 'Carregando...'}</span>
                    <div className={styles.icons}>
                        <span><Earth /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card