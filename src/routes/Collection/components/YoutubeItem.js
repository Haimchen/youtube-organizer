import React from 'react'
import PropTypes from 'prop-types'

export const YoutubeItem = ({ item }) => {
  const TAGS = item.tags.map(tag => <li key={tag}>{tag}</li>)
  const src = `https://www.youtube.com/embed/${item.youtubeId}`

  return (
    <div>
      <iframe width="560" height="315" src={src} frameBorder="0" allowFullScreen></iframe>
      <p>{item.note}</p>
      <ul>
        {TAGS}
      </ul>
    </div>
  )
}

YoutubeItem.propTypes = {
  items: PropTypes.array
}

export default YoutubeItem




