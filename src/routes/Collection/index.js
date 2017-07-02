import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'collection',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Collection = require('./containers/CollectionContainer').default
      const reducer = require('store/collection').default

      /*  Add the reducer to the store on key 'counter'  */
     injectReducer(store, { key: 'collection', reducer })

      /*  Return getComponent   */
      cb(null, Collection)

    /* Webpack named bundle   */
    }, 'collection')
  }
})

