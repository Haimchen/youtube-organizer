import React from 'react'
import PropTypes from 'prop-types'

import EntryList from './EntryList'
import YoutubeItemForm from './YoutubeItemForm'

const TagList = ({ tags }) =>{
  const TAGS = tags.map( (tag) => {
    return <li key={tag}>{tag}</li>
  })

  return (
    <ul>
      {TAGS}
    </ul>
  )
}

const NewItem = ({ collection, add }) => {

  return (
    <form>
      <input type='text' placeholder='Paste youtube link here'/><br />
      <input type='text' placeholder='add a note' />
      <button type='submit' onClick={() => add(collection.id)}>Add Video</button>
    </form>
  )
}

export const CollectionView = ({ collection, addYoutubeItem }) => (
    <div>
      <h1>{collection.title}</h1>
      <p>{collection.description}</p>
      <TagList tags={collection.tags} />
      <EntryList items={collection.items} />
      <YoutubeItemForm add={addYoutubeItem} collectionId={collection.id}/>
    </div>
)

CollectionView.propTypes = {
  collection: PropTypes.object,
  addYoutubeItem: PropTypes.func
}

export default CollectionView


