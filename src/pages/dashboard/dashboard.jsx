import { MapContainer } from "react-leaflet"
import Card from "../../components/card/card"
import Destinos from "../../components/destinos/destinos"
import Header from "../../components/header/header"
import Hero from "../../components/hero/hero"
import { BuscasProvider } from "../../contexts/busca"
import { useEffect, useState } from "react"

function Dashboard() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div>
                <Header></Header>
                <BuscasProvider>
                    <Card></Card>
                </BuscasProvider>
                <Hero></Hero>
                <Destinos></Destinos>
            </div>
        </>
    )
}

export default Dashboard