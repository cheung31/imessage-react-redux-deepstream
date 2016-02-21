
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import deepstream from 'deepstream.io-client-js'
import Cookie from 'js-cookie'

import App from './containers/App'
import NewConversation from './components/NewConversation'
//import ViewConversation from './components/ViewConversation'
import configure from './store'

const ds = deepstream( 'localhost:6020' )
const sid = Cookie.get('imsg-sess')
ds.login({ sid: sid })

var usersList = ds.record.getList('users')
usersList.subscribe(function onUsersChange(users) {
    console.log('List of users is now', usersList.getEntries())
});

/*
var conversations = ds.record.getList('user/'+uid+'/conversations')
conversations.subscribe(function onConversationsChange(conversations) {
    console.log( 'List of my conversations is now', conversations.getEntries() )
});
*/

var store;
usersList.whenReady( function onUsersListReady() {
    var initialUsers = []
    var userEntries = usersList.getEntries()

    if (userEntries.indexOf(sid) === -1) {
        usersList.addEntry(sid)
    }

    userEntries.forEach( function (userId) {
        var user = ds.record.getRecord(userId)
        user.whenReady( function onUserReady() {
            initialUsers.push(user.get())
        });
    })

    store = configure({
        //users: initialUsers
    })
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
});
