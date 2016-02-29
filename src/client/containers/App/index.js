
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UsersActions from '../../actions/users'
import style from './style.css'
import deepstream from 'deepstream.io-client-js'
import Cookie from 'js-cookie'
import * as ProfileActions from '../../actions/profile'
import * as ConversationActions from '../../actions/conversations'

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
    if (sid == undefined) {
        window.location = 'http://localhost:8001'
        return
    }
    App.ds.login({ sid: sid }, function (success, errorCode, userObj) {
        var userId = 'users/' + userObj.username
        console.log('<<< userId', userId)
        var userRecord = App.ds.record.getRecord(userId)
        userRecord.set(userObj)
        dispatch(ProfileActions.setUsername(userObj.username))

        var usersList = App.ds.record.getList('users')
        usersList.subscribe(function onUsersChange(updatedUsersList) {
            console.log('List of users is now', updatedUsersList)

            if (!containsObjectId(userId, updatedUsersList)) {
                usersList.addEntry(userId)
            }
            dispatch(UsersActions.updateUserList(updatedUsersList))
        })

        var conversationListId = userId + '/conversations'
        console.log('<<< conversationListId', conversationListId)
        var conversations = App.ds.record.getList(conversationListId)
        conversations.subscribe(function onConversationsChange(updatedConversations) {
            console.log( 'List of my conversations is now', updatedConversations )
            dispatch(ConversationActions.updateConversationList(updatedConversations))

            updatedConversations.forEach( function( id ) {
                var conversationRecord = App.ds.record.getRecord( id );
                conversationRecord.whenReady( function () {
                    var conversationObj = conversationRecord.get()
                    dispatch(ConversationActions.addConversation(conversationObj))
                });
            })
        })
    })
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
