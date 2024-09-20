import { MapContainer } from "react-leaflet"
import Card from "../../components/card/card"
import Destinos from "../../components/destinos/destinos"
import Header from "../../components/header/header"
import Hero from "../../components/hero/hero"

function Dashboard() {
    return (
        <>
            <div>
                <Header></Header>
                <Card></Card>
                <Hero></Hero>
                <Destinos></Destinos>
                <MapContainer></MapContainer>
            </div>
        </>
    )
}

export default Dashboard