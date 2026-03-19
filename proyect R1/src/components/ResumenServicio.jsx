import { getNextDeparture } from '../utils/schedule'

function ResumenServicio({ linea }) {
  // Esta tarjeta prioriza la pregunta más común del usuario: "¿qué pasa con mi línea ahora?".
  const proximaIda = getNextDeparture(linea.horarios.ida.items)
  const proximaVuelta = getNextDeparture(linea.horarios.vuelta.items)

  return (
    <section className="panel-card resumen-servicio">
      <div>
        <p className="section-kicker">Resumen rápido</p>
        <h2>{linea.nombre}</h2>
        <p className="detalle-panel__copy">{linea.descripcion}</p>
      </div>

      <div className="resumen-servicio__grid">
        <article className="resumen-chip">
          <span className="resumen-chip__label">Próxima ida</span>
          <strong>{proximaIda.label}</strong>
          <small>{linea.horarios.ida.etiqueta}</small>
        </article>

        <article className="resumen-chip">
          <span className="resumen-chip__label">Próxima vuelta</span>
          <strong>{proximaVuelta.label}</strong>
          <small>{linea.horarios.vuelta.etiqueta}</small>
        </article>

        <article className="resumen-chip resumen-chip--status">
          <span className="resumen-chip__label">Estado actual</span>
          <strong>{linea.gps.estado}</strong>
          <small>Unidad {linea.gps.interno}</small>
        </article>
      </div>
    </section>
  )
}

export default ResumenServicio
