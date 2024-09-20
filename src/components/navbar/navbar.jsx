import { Earth } from 'lucide-react'
import styles from './styles.module.css'

function Navbar() {
    return (
        <>
            <nav className={`navbar bg-primary-subtle fixed-to`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas bg-primary-subtle offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <h3 className='text-center text-secondary'>Viagem 365</h3>
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={`offcanvas-body bg-primary-subtle`}>
                        <ul className={`navbar-nav ${styles.container} flex-grow-1 pe-3`}>
                            <li className="nav-item">
                                <a className="nav-link active text-info-emphasis" aria-current="page" href="#">Usuários</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info-emphasis" href="#">Locais</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`navbar-nav ${styles.container}  flex-grow-1 pe-3`}>
                            <li className="nav-item">
                                <a className="nav-link text-info-emphasis" href="#">Sair</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar