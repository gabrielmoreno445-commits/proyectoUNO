import { getNextDeparture } from '../utils/schedule'

function HorariosPanel({ linea }) {
  const proximaIda = getNextDeparture(linea.horarios.ida.items)
  const proximaVuelta = getNextDeparture(linea.horarios.vuelta.items)

  return (
    <div className="detalle-grid">
      <article className="info-block">
        <div className="info-block__header">
          <div>
            <h3>Horarios de ida</h3>
            <span>{linea.horarios.ida.etiqueta}</span>
          </div>
          <strong className="info-highlight">Próximo: {proximaIda.label}</strong>
        </div>
        <ul className="horario-lista">
          {linea.horarios.ida.items.map((horario) => (
            <li key={horario}>{horario}</li>
          ))}
        </ul>
      </article>

      <article className="info-block">
        <div className="info-block__header">
          <div>
            <h3>Horarios de vuelta</h3>
            <span>{linea.horarios.vuelta.etiqueta}</span>
          </div>
          <strong className="info-highlight">Próximo: {proximaVuelta.label}</strong>
        </div>
        <ul className="horario-lista">
          {linea.horarios.vuelta.items.map((horario) => (
            <li key={horario}>{horario}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default HorariosPanel
