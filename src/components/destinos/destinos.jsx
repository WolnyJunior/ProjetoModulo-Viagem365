import destinosData from '../../../database/destinos.json'
import styles from './styles.module.css'

function Destinos() {
    const destinos = destinosData.destinos
    return (
        <>
            <div className={styles.cardDestinos}>
                <ul>
                    {destinos.map(destino => <li key={destino.id}>
                        <div className='destino'>
                            <img src={destino.imagem} alt="Imagem Destino" />
                            <h5>{destino.nome}</h5>
                            <h6>{destino.localizacao}</h6>
                            <p>{destino.descricao}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export default Destinos