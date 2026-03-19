import './App.css'

import { useEffect, useState } from 'react'

import Footer from './Footer'
import Header from './components/Header'
import Lineas from './components/Lineas'
import MapaPanel from './components/MapaPanel'
import PanelDetalle from './components/PanelDetalle'
import ResumenServicio from './components/ResumenServicio'
import ThemeToggle from './components/ThemeToggle'
import { brand } from './data/brand'
import { lineas } from './data/lineas'

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  // Este estado concentra la navegación principal de la interfaz.
  const [lineaActivaId, setLineaActivaId] = useState(lineas[0].id)
  const [vistaActiva, setVistaActiva] = useState('horarios')
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    // Persistimos el tema para respetar la preferencia del usuario entre sesiones.
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const lineaActiva = lineas.find((linea) => linea.id === lineaActivaId) ?? lineas[0]

  return (
    <div className="app-shell">
      <Header brand={brand}>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </Header>

      <main className="dashboard">
        <aside className="dashboard__sidebar">
          <Lineas
            lineas={lineas}
            lineaActivaId={lineaActivaId}
            onSeleccionarLinea={setLineaActivaId}
          />
        </aside>

        <section className="dashboard__content">
          <ResumenServicio linea={lineaActiva} />
          <PanelDetalle
            linea={lineaActiva}
            vistaActiva={vistaActiva}
            onCambiarVista={setVistaActiva}
          />
          <MapaPanel linea={lineaActiva} />
        </section>
      </main>

      <Footer footerCopy={brand.footerCopy} />
    </div>
  )
}

export default App
