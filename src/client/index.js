
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import NewConversation from './components/NewConversation'
import ViewConversation from './components/ViewConversation'
import configure from './store'

var store = configure()
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NewConversation} />
        <Route path="conversations/:conversationId" component={ViewConversation}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
