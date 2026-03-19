function parseTimeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

function getCurrentMinutes() {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

export function getNextDeparture(times) {
  // Si mañana cambian los horarios por API, esta utilidad evita duplicar lógica en varios componentes.
  const currentMinutes = getCurrentMinutes()
  const nextTime = times.find((time) => parseTimeToMinutes(time) >= currentMinutes)

  if (!nextTime) {
    return {
      label: `${times[0]} (mañana)`,
    }
  }

  return {
    label: nextTime,
  }
}
