function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      type="button"
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀' : '🌙'}
      </span>
      <span className="theme-toggle__text">
        {isDark ? 'Modo claro' : 'Modo oscuro'}
      </span>
    </button>
  )
}

export default ThemeToggle
