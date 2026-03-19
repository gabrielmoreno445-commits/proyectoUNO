import { CircleMarker, MapContainer, Polyline, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function MapaInteractivo({ linea }) {
  // Este componente ya deja preparada la base para dibujar unidades en vivo en una etapa 3.
  return (
    <MapContainer
      center={linea.mapCenter}
      zoom={linea.mapZoom}
      scrollWheelZoom={true}
      className="leaflet-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline positions={linea.recorrido} pathOptions={{ color: '#0f766e', weight: 6 }} />

      {linea.paradas.map((parada) => (
        <CircleMarker
          key={parada.id}
          center={parada.coords}
          radius={parada.principal ? 8 : 6}
          pathOptions={{
            color: parada.principal ? '#0f766e' : '#155e75',
            weight: 2,
            fillColor: parada.principal ? '#14b8a6' : '#67e8f9',
            fillOpacity: 0.9,
          }}
        >
          <Popup>
            <strong>{parada.nombre}</strong>
            <br />
            {parada.barrio}
            <br />
            Paso estimado: {parada.tiempo}
          </Popup>
        </CircleMarker>
      ))}

      <CircleMarker
        center={linea.gps.coordenadas}
        radius={10}
        pathOptions={{ color: '#b91c1c', weight: 3, fillColor: '#fb7185', fillOpacity: 0.95 }}
      >
        <Popup>
          <strong>Unidad {linea.gps.interno}</strong>
          <br />
          {linea.gps.parada}
          <br />
          Actualizado {linea.gps.actualizacion}
        </Popup>
      </CircleMarker>
    </MapContainer>
  )
}

export default MapaInteractivo
