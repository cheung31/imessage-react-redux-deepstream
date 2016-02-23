
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UsersActions from '../../actions/users'
import style from './style.css'
import deepstream from 'deepstream.io-client-js'
import Cookie from 'js-cookie'

function containsObjectId(objId, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === objId) {
            return true;
        }
    }

    return false;
}

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    const sid = Cookie.get('imsg-sess')
    App.ds.login({ sid: sid }, function (success, errorCode, userObj) {
        var usersList = App.ds.record.getList('users')
        usersList.subscribe(function onUsersChange(users) {
            var userEntries = usersList.getEntries()
            console.log('List of users is now', userEntries)
        });

        var recordName = 'users/' + userObj.username
        var userRecord = App.ds.record.getRecord(recordName)
        userRecord.set(userObj)

        usersList.whenReady( function onUsersListReady() {
            var userEntries = usersList.getEntries()

            if (!containsObjectId(recordName, userEntries)) {
                usersList.addEntry(recordName)
            }
            dispatch(UsersActions.updateUserList(userEntries))
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

if (!App.ds) {
  App.ds = deepstream('localhost:6020')
}

export default connect()(App)
