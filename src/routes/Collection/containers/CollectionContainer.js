import { connect } from 'react-redux'

import CollectionView from '../components/CollectionView'

const mapDispatchToProps = {
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    collection: state.collection
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView)


