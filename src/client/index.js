
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import NewConversation from './components/NewConversation'
//import ViewConversation from './components/ViewConversation'
import configure from './store'

var store = configure()
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="new" component={NewConversation}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
