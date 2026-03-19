function EstadoServicioPanel({ linea }) {
  const { estadoServicio } = linea

  return (
    <section className="estado-servicio-grid">
      <article className="info-block">
        <div className="info-block__header">
          <div>
            <h3>Estado del servicio</h3>
            <span>{estadoServicio.estado}</span>
          </div>
        </div>
        <p className="detalle-panel__copy">{estadoServicio.mensaje}</p>
      </article>

      <article className="info-block">
        <div className="info-block__header">
          <div>
            <h3>Frecuencia estimada</h3>
            <span>{estadoServicio.frecuencia}</span>
          </div>
        </div>
        <p className="detalle-panel__copy">{estadoServicio.cobertura}</p>
      </article>
    </section>
  )
}

export default EstadoServicioPanel
