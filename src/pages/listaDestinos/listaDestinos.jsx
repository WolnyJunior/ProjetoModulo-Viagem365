import { useEffect, useState } from "react"
import Header from "../../components/header/header"
import styles from './styles.module.css'
import MapComponent from "../../components/mapa/mapa"
import { MapContainer } from "react-leaflet"

function ListaDestinosPage() {
    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        async function listarDestinos() {
            try {
                const response = await fetch('http://localhost:3000/destinos')
                if (response.ok) {
                    const data = await response.json()
                    setDestinos(data)
                    // console.log(data)
                } else {
                    console.error('Erro ao listar destinos.')
                }
            } catch (error) {
                console.error('Erro ao listar destinos.', error)
            }
        }
        listarDestinos()
    }, [])

    return (
        <>
            <Header></Header>
            <div>
                <table className="table table-primary table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome:</th>
                            <th>Lat:</th>
                            <th>Long:</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {destinos.map((destino, index) => {
                            return (
                                <tr key={destino.id}>
                                    <th>{destino.id}</th>
                                    <td>{destino.nome}</td>
                                    <th>{destino.latitude}</th>
                                    <td>{destino.longitude}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-primary">Editar</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <ul>
                    {destinos.map(destino => <li className={`bg-primary-subtle ${styles.card}`} key={destino.id}>
                        <div className='destino'>
                            <div className={styles.maps}>
                                <MapComponent latitude={destino.latitude} longitude={destino.longitude}></MapComponent>
                            </div>
                            <h5>{destino.nome}</h5>
                            <p>{destino.descricao}</p>
                        </div>
                        <div className={styles.info}>
                            <div>
                                <h6>Preço:</h6>
                                <p>{destino.preco}</p>
                            </div>
                            <div>
                                <h6>Data:</h6>
                                <p>{destino.data}</p>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export default ListaDestinosPage