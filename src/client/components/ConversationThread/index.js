
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../Message'
import App from '../../containers/App'
//import MessageStatus from '../MessageStatus'
//import TypingIndicator from '../TypingIndicator'
import style from './style.css'

class ConversationThread extends Component {
  componentWillReceiveProps() {
    const { profile, selectedConversation } = this.props
    if (profile.username && selectedConversation) {
        console.log("SUBSCRIBING TO: ", selectedConversation)
        this.conversationRecord = App.ds.record.getRecord(selectedConversation)
        this.conversationRecord.subscribe('messages', function (messages) {
          this.setState({ messages: messages })
        }.bind(this))
    }
  }

  componentWillUnmount() {
      if (this.conversationRecord) {
        this.conversationRecord.unsubscribe('messages')
      }
  }

  render() {
    const { conversation, onSendMessage, onReceivedMessage, onReadMessage, onStartTyping } = this.props

    var messages = this.state ? this.state.messages : []
    if (!messages.length && conversation) {
        messages = conversation.messages
    }
    var messageItems = []
    if (conversation) {
        for (let index in messages) {
          var message = messages[index]
          messageItems.push(<Message key={message} message={message} />)
        }
    }
    return (
      <div ref={(c) => this.threadContainer = c} className={style.threadContainer}>
        <div ref={(c) => this.paddingItem = c} className={style.listPadder}></div>
        <ul ref={(c) => this.threadList = c}>{messageItems}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    selectedConversation: state.selectedConversation
  }
}

export default connect(
  mapStateToProps
)(ConversationThread)
