import { namespaceConfig } from 'fast-redux'
const { action } = namespaceConfig('locations', {})

export const updateMaker = action('update/marker', (state, data) => {
  return { ...state, ...{ marker: { ...state.marker, ...data } } }
})
