import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapComponent = ({ latitude, longitude }) => {
    const coordenadasOk = latitude && longitude && !isNaN(latitude) && !isNaN(longitude)
    if (!coordenadasOk) {
        return <p>Coordenadas inválidas.</p>
    }

    return (
        <>
            <MapContainer center={[latitude, longitude]} zoom={20} style={{ height: '200px', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
                </TileLayer>
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        Localização
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default MapComponent