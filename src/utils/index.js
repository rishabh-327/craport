// Generates a random 5 digit (base 36) id
export const generateWorkId = () => {
  return Math.random()
    .toString(36)
    .slice(8)
}
// Generates a random 4 digit (base 36) id
export const generateReportId = () => {
  return Math.random()
    .toString(36)
    .slice(9)
}

export const persistReports = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('reports', JSON.stringify(state.reports))
  })
}
