export const generateId = () => {
  return Math.random()
    .toString(36)
    .slice(8)
}

export const persistWorks = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('works', JSON.stringify(state.works))
  })
}
