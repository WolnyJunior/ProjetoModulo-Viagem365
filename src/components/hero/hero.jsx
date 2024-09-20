import styles from './styles.module.css'

function Hero() {
    return (
        <>
            <div className={`bg-primary-subtle ${styles.container}`}>
                <div>
                    <h1>Trilhas, Mirantes, Cachoeiras?</h1>
                    <h3>No <span className='text-primary'> Viagem 365</span>, você encontra tudo!</h3>
                </div>
            </div>
        </>
    )
}

export default Hero