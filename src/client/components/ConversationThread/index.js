
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../Message'
import App from '../../containers/App'
//import MessageStatus from '../MessageStatus'
//import TypingIndicator from '../TypingIndicator'
import style from './style.css'

class ConversationThread extends Component {
  componentWillMount() {
    setTimeout(() => {
        this.threadContainer.scrollTop = this.threadList.scrollHeight;
    }, 1500)
  }

  componentWillReceiveProps(nextProps) {
    const { profile, selectedConversation } = nextProps
    if (profile.username && selectedConversation) {
        console.log("SUBSCRIBING TO: ", selectedConversation)
        this.conversationRecord = App.ds.record.getRecord(selectedConversation)
        this.conversationRecord.whenReady(() => {
          var messages = this.conversationRecord.get('messages')
          this.setState({ messages: messages })
          this.threadContainer.scrollTop = this.threadList.scrollHeight;

          this.conversationRecord.subscribe('messages', (messages) => {
            this.setState({ messages: messages })
            setTimeout(() => {
                this.threadContainer.scrollTop = this.threadList.scrollHeight;
            }, 100)
          })
        })
    }
  }

  componentWillUnmount() {
      if (this.conversationRecord) {
        this.conversationRecord.unsubscribe('messages')
      }
  }

  render() {
    const { newConversation, conversation, onSendMessage, onReceivedMessage, onReadMessage, onStartTyping } = this.props

    var messages = this.state ? this.state.messages : []
    if (!messages.length && conversation) {
        messages = conversation.messages
    }
    console.log('~~~ b', messages.length);
    var messageItems = []
    if (conversation && !newConversation) {
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
    newConversation: state.newConversation,
    profile: state.profile,
    selectedConversation: state.selectedConversation
  }
}

export default connect(
  mapStateToProps
)(ConversationThread)
