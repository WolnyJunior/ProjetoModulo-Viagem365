import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapComponent = ({ lat, long }) => {
    const coordenadasOk = lat && long && !isNaN(lat) && !isNaN(long)
    if (!coordenadasOk) {
        return <p>Coordenadas inválidas.</p>
    }

    return (
        <>
            <MapContainer center={[lat, long]} zoom={20} style={{ height: '400x', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
                </TileLayer>
                <Marker position={[lat, long]}>
                    <Popup>
                        Localização
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default MapComponent