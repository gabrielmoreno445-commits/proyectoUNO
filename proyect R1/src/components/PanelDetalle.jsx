import HorariosPanel from './HorariosPanel'
import ParadasPanel from './ParadasPanel'
import ProximoLlegarPanel from './ProximoLlegarPanel'
import EstadoServicioPanel from './EstadoServicioPanel'

function PanelDetalle({ linea, vistaActiva, onCambiarVista }) {
  return (
    <section className="panel-card detalle-panel">
      <div className="detalle-panel__header">
        <div>
          <p className="section-kicker">{linea.zona}</p>
          <h2>{linea.nombre}</h2>
          <p className="detalle-panel__copy">{linea.resumen}</p>
        </div>

        <div className="vista-switcher" role="tablist" aria-label="Opciones de la línea">
          <button
            className={vistaActiva === 'horarios' ? 'is-selected' : ''}
            onClick={() => onCambiarVista('horarios')}
            type="button"
          >
            Ver horarios
          </button>
          <button
            className={vistaActiva === 'proximo' ? 'is-selected' : ''}
            onClick={() => onCambiarVista('proximo')}
            type="button"
          >
            Próximo a llegar
          </button>
        </div>
      </div>

      {/* Acá se pueden sumar nuevas pestañas si la app crece: alertas, tarifas o paradas. */}
      <div className="detalle-stack">
        {vistaActiva === 'horarios' ? (
          <>
            <HorariosPanel linea={linea} />
            <ParadasPanel paradas={linea.paradas} />
          </>
        ) : (
          <>
            <ProximoLlegarPanel linea={linea} />
            <EstadoServicioPanel linea={linea} />
          </>
        )}
      </div>
    </section>
  )
}

export default PanelDetalle
