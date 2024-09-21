import { useEffect, useState } from 'react'
import styles from './styles.module.css'

function Hero() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])


    return (
        <>
            <div className={`bg-primary-subtle ${styles.container}`}>
                <div>
                    <h1>Trilhas, Mirantes, Cachoeiras?</h1>
                    <h3>No <span className='text-primary'> Viagem 365</span>, você encontra tudo!</h3>
                </div>
                {showModal && (
                    <div className={`show ${styles.modal}`} style={{ display: 'block' }}>
                        <div className={`bg-warning opacity-75 ${styles.modalContent}`}>
                            <button className="close btn btn-close" onClick={() => setShowModal(false)}></button>
                            <h1>Desculpe o transtorno, estamos em obras.</h1>
                            <h2>Site em construção!</h2>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Hero