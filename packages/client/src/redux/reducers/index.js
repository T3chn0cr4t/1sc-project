import { combineReducers } from 'redux'
import showSidebarReducer from './showSideBarReducer'
import collectifRdvModalReducer from './collectifRdvModal'
import IndividuelleRdvModalReducer from './individuelleRdvModal'
import typeRdvModalReducer from './typeRdv'
import aprouvRdvModalReducer from './aprouvRdv'
import archiveModalReducer from './archiver'
import bringPatientReducer from './bringPatient'
import bringNotificationReducer from './bringNotification'

const allReducers = combineReducers({
  showSidebar: showSidebarReducer,
  hideSidebar: showSidebarReducer,
  toggleTypeRdvModal: typeRdvModalReducer,
  toggleCollecRdvModal: collectifRdvModalReducer,
  toggleIndividuelleRdvModal: IndividuelleRdvModalReducer,
  toggleAprouvRdv : aprouvRdvModalReducer,
  toggleArchive : archiveModalReducer,
  bringPatient : bringPatientReducer,
  bringNotification : bringNotificationReducer
})

export default allReducers
