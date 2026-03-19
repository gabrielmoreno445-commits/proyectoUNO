function ParadasPanel({ paradas }) {
  return (
    <section className="info-block paradas-panel">
      <div className="info-block__header">
        <div>
          <h3>Paradas clave</h3>
          <span>Recorrido principal</span>
        </div>
      </div>

      <ul className="paradas-lista">
        {paradas.map((parada) => (
          <li key={parada.id} className="parada-item">
            <div>
              <strong>{parada.nombre}</strong>
              <small>{parada.barrio}</small>
            </div>
            <div className="parada-item__meta">
              {parada.principal ? <span>Principal</span> : <span>Intermedia</span>}
              <strong>{parada.tiempo}</strong>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ParadasPanel
