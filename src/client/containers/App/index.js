
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UsersActions from '../../actions/users'
import style from './style.css'
import deepstream from 'deepstream.io-client-js'
import Cookie from 'js-cookie'

const ds = deepstream( 'localhost:6020' )

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    const sid = Cookie.get('imsg-sess')
    ds.login({ sid: sid })

    var usersList = ds.record.getList('users')
    usersList.subscribe(function onUsersChange(users) {
        console.log('List of users is now', usersList.getEntries())
    });

    usersList.whenReady( function onUsersListReady() {
        var initialUsers = []
        var userEntries = usersList.getEntries()

        if (userEntries.indexOf(sid) === -1) {
            usersList.addEntry(sid)
        }
        dispatch(UsersActions.updateUserList(userEntries))

        userEntries.forEach( function (userId) {
            var user = ds.record.getRecord(userId)
            user.whenReady( function onUserReady() {
                initialUsers.push(user.get())
            });
        })
     })

    /*
    var conversations = ds.record.getList('user/'+uid+'/conversations')
    conversations.subscribe(function onConversationsChange(conversations) {
        console.log( 'List of my conversations is now', conversations.getEntries() )
    });
    */
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
