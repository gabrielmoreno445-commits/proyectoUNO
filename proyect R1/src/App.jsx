import './App.css'

import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Navbar />

      <main style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Mi Galería de Componentes</h1>

        {/* Aquí puedes poner varias tarjetas */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Card />
          <Card />
          <Card />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
