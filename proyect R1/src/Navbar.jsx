
function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#1f2028', 
      padding: '1rem', 
      display: 'flex', 
      justifyContent: 'space-between',
      borderBottom: '1px solid #2e303a' 
    }}>
      <h2 style={{ color: '#c084fc', margin: 0 }}>GabyDev</h2>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', color: 'white', margin: 0 }}>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar

