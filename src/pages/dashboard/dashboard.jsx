import { MapContainer } from "react-leaflet"
import Card from "../../components/card/card"
import Destinos from "../../components/destinos/destinos"
import Header from "../../components/header/header"
import Hero from "../../components/hero/hero"
import { BuscasProvider } from "../../contexts/busca"

function Dashboard() {
    return (
        <>
            <div>
                <Header></Header>
                <BuscasProvider>
                    <Card></Card>
                </BuscasProvider>
                <Hero></Hero>
                <Destinos></Destinos>
                <MapContainer></MapContainer>
            </div>
        </>
    )
}

export default Dashboard