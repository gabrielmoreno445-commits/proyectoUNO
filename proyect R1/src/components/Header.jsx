import BrandMark from './BrandMark'

function Header({ brand, children }) {
  return (
    <header className="hero-header">
      <div className="hero-header__topbar">
        <BrandMark appName={brand.appName} cityName={brand.cityName} />
        {children}
      </div>

      <div className="hero-header__content">
        <div>
          <p className="eyebrow">{brand.eyebrow}</p>
          <h1>{brand.heroTitle}</h1>
          <p className="hero-copy">{brand.heroCopy}</p>
        </div>

        <div className="hero-header__aside">
          <span className="hero-header__pill">Horarios y llegadas</span>
          <span className="hero-header__pill">Consulta rápida y clara</span>
        </div>
      </div>
    </header>
  )
}

export default Header
