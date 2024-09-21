import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { House } from 'lucide-react'

function Navbar() {
    return (
        <>
            <nav className={`navbar bg-primary-subtle fixed-to`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas bg-primary-subtle offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className={styles.homeNavbar}>
                        <span className='text-secondary'><House /></span>
                        <Link to='/dashboard' className='nav-link'><h3 className='text-center text-secondary'>Viagem 365</h3></Link>
                    </div>
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={`offcanvas-body bg-primary-subtle`}>
                        <ul className={`navbar-nav ${styles.container} flex-grow-1 pe-3`}>
                            <li className="nav-item">
                                <Link className="nav-link active text-info-emphasis" aria-current="page" to='/dashboard' >Usuários</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-info-emphasis" to="/listar-destinos">Locais</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`navbar-nav ${styles.container}  flex-grow-1 pe-3`}>
                            <li className="nav-item">
                                <Link className="nav-link text-info-emphasis" to="/login">Sair</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar