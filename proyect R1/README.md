# EldoBus

Aplicacion web de consulta para transporte urbano construida con React y Vite.

El proyecto fue reorganizado para que la interfaz, los datos y la logica queden separados en componentes y archivos puntuales. La idea es que despues resulte facil mejorar una parte especifica sin tener que rehacer toda la app.

## Estado actual

- Marca actual: `EldoBus`
- Tema claro y oscuro
- Selector de lineas
- Vista de horarios
- Vista de proximo a llegar
- Mapa interactivo con `Leaflet`
- Paradas y recorrido por linea
- Base preparada para una futura etapa 3 con datos mas reales o GPS en vivo

## Objetivo del proyecto

La app busca mostrar de forma mas clara:

- que linea elegir
- cuales son sus horarios
- cual es la proxima unidad
- por donde pasa

## Tecnologias usadas

- React
- Vite
- Leaflet
- React Leaflet

## Comandos utiles

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura principal

```text
src/
  components/
    BrandMark.jsx
    EstadoServicioPanel.jsx
    Header.jsx
    HorariosPanel.jsx
    Lineas.jsx
    MapaInteractivo.jsx
    MapaPanel.jsx
    PanelDetalle.jsx
    ParadasPanel.jsx
    ProximoLlegarPanel.jsx
    ResumenServicio.jsx
    ThemeToggle.jsx
  data/
    brand.js
    lineas.js
  utils/
    schedule.js
  App.jsx
  App.css
  Footer.jsx
  index.css
  main.jsx
```

## Donde tocar cada cosa

- Branding y textos generales: `src/data/brand.js`
- Datos de lineas, horarios, paradas y recorrido: `src/data/lineas.js`
- Layout principal: `src/App.jsx`
- Header y marca visual: `src/components/Header.jsx`
- Cambio de tema: `src/components/ThemeToggle.jsx`
- Horarios: `src/components/HorariosPanel.jsx`
- Proxima unidad: `src/components/ProximoLlegarPanel.jsx`
- Estado del servicio: `src/components/EstadoServicioPanel.jsx`
- Paradas: `src/components/ParadasPanel.jsx`
- Mapa: `src/components/MapaPanel.jsx` y `src/components/MapaInteractivo.jsx`
- Utilidad de proximos horarios: `src/utils/schedule.js`

## Comentarios estrategicos

- `src/data/lineas.js` hoy usa datos simulados. Mantener la misma estructura ayudara mucho cuando despues se conecte una API real.
- `src/components/MapaInteractivo.jsx` ya deja una base util para una futura ubicacion en tiempo real.
- `src/utils/schedule.js` concentra la logica de proximas salidas para no duplicarla en varios componentes.
- El proyecto fue separado en componentes pequenos a proposito, para poder hacer ajustes finos de manera puntual.

## Siguientes pasos sugeridos

### Etapa 3 posible

- conectar ubicacion real de unidades
- consumir datos desde API o backend
- actualizar paradas y estado de servicio en tiempo real
- sumar alertas, desvios o cortes

## Nota

Durante el desarrollo se verifico la compilacion con `npm run build` despues de los cambios importantes.
