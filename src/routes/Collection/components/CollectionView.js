import React from 'react'
import PropTypes from 'prop-types'

import EntryList from './EntryList'

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

const NewItem = ({collection}) => {
  return <div>Form for new items goes here</div>
}

export const CollectionView = ({ collection }) => (
    <div>
      <h1>{collection.title}</h1>
      <p>{collection.description}</p>
      <TagList tags={collection.tags} />
      <EntryList items={collection.items} />
      <NewItem collection={collection} />
    </div>
)

CollectionView.propTypes = {
  collection: PropTypes.object
}

export default CollectionView


