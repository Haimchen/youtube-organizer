// ------------------------------------
// Constants
// ------------------------------------
export const NEW_ITEM = 'NEW_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
var idCounter = 0
export function addItem (youtubeId, note) {
  const id = idCounter ++
  idCounter = id
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
  const newItems = state.items.concat([newItem])
  return { ...state, items: newItems }
}

