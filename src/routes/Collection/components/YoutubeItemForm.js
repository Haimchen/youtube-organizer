import React from 'react'
import PropTypes from 'prop-types'

export default class YoutubeItemForm extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      youtubeLink: props.youtubeLink,
      note: props.note
    }
  }

  _youtubeLinkChanged = (e) => {
    const newLink = e.target.value
    this.setState({youtubeLink: newLink})
  }

  _noteChanged = (e) => {
    const newNote = e.target.value
    this.setState({note: newNote})
  }

  _submit = (e)  => {
    e.preventDefault()
    this.props.add(this.props.collectionId, this.state.youtubeLink, this.state.note)
  }

  render () {
    const { youtubeLink, note, collectionId } = this.props

    return (
      <form>
        <input type='text' onChange={this._youtubeLinkChanged} placeholder='Paste youtube link here'/><br />
        <input type='text' onChange={this._noteChanged} placeholder='add a note' />
        <button type='submit' onClick={this._submit}>Add Video</button>
      </form>
    )
  }
}

YoutubeItemForm.propTypes = {
  add: PropTypes.func,
  youtubeLink: PropTypes.string,
  note: PropTypes.string,
  collectionId: PropTypes.number
}




