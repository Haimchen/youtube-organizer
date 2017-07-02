import extractYoutubeId from 'lib/extractYoutubeId'
// ------------------------------------
// Constants
// ------------------------------------
export const NEW_ITEM = 'NEW_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
var idCounter = 3
export function addItem (collectionId, youtubeLink, note) {
  const youtubeId = extractYoutubeId(youttubeLink)
  const id = idCounter ++
  idCounter = id
  // TODO: check collectionID

  return {
    type    : NEW_ITEM,
    payload : { id: id, note: note, youtubeId: youtubeId}
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
// export const updateLocation = ({ dispatch }) => {
//   return (nextLocation) => dispatch(locationChange(nextLocation))
// }

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  title: 'Short Yoga Lessons',
  id: 1234,
  description: 'A collection of short (max. 20 min) yoga workouts to choose from for your daily practice.',
  tags: ['easy', 'no music', 'advanced', 'music'],
  items: [
    { id: 1, youtubeId: '0pbuvhbg7po', note: 'Focus mostly on back and shoulders', tags: ['short'] },
    { id: 2, youtubeId: 'xEyyu7kk0ZI', note: 'Includes about 5 mins of mediation & breathing', tags: ['advanced'] }
  ]
}

export default function collectionReducer (state = initialState, action) {
  switch(action.type) {
    case NEW_ITEM: return createItemInCollection(state, action.payload)
    default: return state
  }
}

const createItemInCollection = (state, newItem) => {
  const newItems = state.items.concat([{ ...newItem, tags: [] }])
  return { ...state, items: newItems }
}

