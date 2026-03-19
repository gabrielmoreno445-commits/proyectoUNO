function Lineas({ lineas, lineaActivaId, onSeleccionarLinea }) {
  return (
    <section className="panel-card lineas-panel">
      <div className="section-heading">
        <p className="section-kicker">Líneas disponibles</p>
        <h2>Seleccioná tu recorrido</h2>
        <p className="section-copy">
          Elegí una línea para ver horarios completos, estado del servicio y el mapa del recorrido.
        </p>
      </div>

      <div className="lineas-lista">
        {lineas.map((linea) => (
          <button
            key={linea.id}
            className={`linea-boton ${linea.id === lineaActivaId ? 'is-active' : ''}`}
            onClick={() => onSeleccionarLinea(linea.id)}
            type="button"
          >
            <span className="linea-boton__titulo">{linea.nombre}</span>
            <span className="linea-boton__subtitulo">{linea.descripcion}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Lineas
