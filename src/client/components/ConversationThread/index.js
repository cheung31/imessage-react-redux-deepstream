
import React, { Component } from 'react'
import Message from '../Message'
//import MessageStatus from '../MessageStatus'
//import TypingIndicator from '../TypingIndicator'
import style from './style.css'

class ConversationThread extends Component {
  render() {
    const { conversation, onSendMessage, onReceivedMessage, onReadMessage, onStartTyping } = this.props
    var messages = []
    for (let message in conversation.messages) {
      messages.push(<Message message={message} />)
    }
        //<MessageStatus onSendMessage={onSendMessage} onReadMessage={onReadMessage} />
        //<TypingIndicator onStartTyping={onStartTyping} />
    return (
      <div className={style.threadContainer}>
        <ul>{messages}</ul>
      </div>
    )
  }
}

export default ConversationThread
