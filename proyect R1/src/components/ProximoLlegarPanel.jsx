function ProximoLlegarPanel({ linea }) {
  // Por ahora este bloque usa datos simulados; después puede alimentarse desde GPS o una API.
  const { gps } = linea

  return (
    <div className="detalle-grid">
      <article className="info-block info-block--status">
        <div className="gps-badge">
          <span className="gps-dot" />
          Seguimiento activo
        </div>

        <h3>Próxima unidad</h3>
        <p className="proximo-tiempo">{gps.minutos} min</p>
        <p className="detalle-panel__copy">
          Interno {gps.interno} llegando a {gps.parada}.
        </p>
      </article>

      <article className="info-block">
        <div className="info-block__header">
          <div>
            <h3>Estado del recorrido</h3>
            <span>{gps.estado}</span>
          </div>
          <strong className="info-highlight">{gps.distancia}</strong>
        </div>

        <ul className="estado-lista">
          <li>Última actualización: {gps.actualizacion}</li>
          <li>Sentido actual: {gps.sentido}</li>
          <li>Próxima parada estimada: {gps.parada}</li>
        </ul>
      </article>
    </div>
  )
}

export default ProximoLlegarPanel
