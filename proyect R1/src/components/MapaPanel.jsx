import MapaInteractivo from './MapaInteractivo'

function MapaPanel({ linea }) {
  return (
    <section className="panel-card mapa-panel">
      <div className="mapa-panel__header">
        <div>
          <p className="section-kicker">Mapa interactivo</p>
          <h2>Recorrido y paradas</h2>
        </div>
        <p className="mapa-ayuda">
          El trazo verde representa el recorrido, los puntos marcan paradas y el marcador rojo
          muestra la unidad estimada.
        </p>
      </div>

      <div className="mapa-meta">
        <span>{linea.paradas.length} paradas visibles</span>
        <span>{linea.estadoServicio.frecuencia}</span>
        <span>{linea.estadoServicio.estado}</span>
      </div>

      <div className="mapa-embed mapa-embed--interactive">
        <MapaInteractivo linea={linea} />
      </div>
    </section>
  )
}

export default MapaPanel
