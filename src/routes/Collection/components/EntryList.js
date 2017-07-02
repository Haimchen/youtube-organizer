import React from 'react'
import PropTypes from 'prop-types'

import YoutubeItem from './YoutubeItem'

export const EntryList = ({ items }) => {
  const ITEMS = items.map(item => <YoutubeItem key={item.id} item={item} />)

  return (
    <div>
      {ITEMS}
    </div>
  )
}

EntryList.propTypes = {
  items: PropTypes.array
}

export default EntryList



