export const showSidebarAction = () => {
  return { type: 'SHOW_SIDE' }
}
export const hideSidebarAction = () => {
  return { type: 'HIDE_SIDE' }
}
export const TypeRdvAction = () => {
  return { type: 'TYPE_RDV' }
}

export const collecRdvAction = () => {
  return { type: 'COLLEC_RDV' }
}

export const IndvRdvAction = () => {
  return { type: 'INDIV_RDV' }
}

export const AprouvRdvAction = (notification) => {
  return { type: 'APROUV_RDV', notification }
}

export const archiveAction = (patient) => {
  return { type: 'ARCHIVER', patient }
}
