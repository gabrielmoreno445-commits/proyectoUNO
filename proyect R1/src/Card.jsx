function Card() {
  return (
    <div style={{ 
      border: '1px solid #2e303a', 
      borderRadius: '12px', 
      padding: '20px', 
      backgroundColor: '#16171d',
      maxWidth: '300px',
      margin: '20px auto'
    }}>
      <h3 style={{ color: '#f3f4f6' }}>Mi Proyecto React</h3>
      <p style={{ color: '#9ca3af' }}>Este es un componente reutilizable creado por Gabriel.</p>
      <button style={{ backgroundColor: '#c084fc', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}>
        Ver más
      </button>
    </div>
  )
}

export default Card
