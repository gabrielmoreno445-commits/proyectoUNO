function BrandMark({ appName, cityName }) {
  return (
    <div className="brand-mark" aria-label={`${appName} - ${cityName}`}>
      <div className="brand-mark__badge" aria-hidden="true">
        NB
      </div>
      <div>
        <p className="brand-mark__name">{appName}</p>
        <p className="brand-mark__city">{cityName}</p>
      </div>
    </div>
  )
}

export default BrandMark
