import { connect } from 'react-redux'

import { addItem } from 'store/collection'

import CollectionView from '../components/CollectionView'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addYoutubeItem: (collectionId, youtubeLink, note) => {

      console.log(youtubeLink, collectionId, note)
      dispatch(addItem(collectionId, youtubeLink, note))
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    collection: state.collection
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView)


