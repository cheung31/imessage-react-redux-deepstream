
import React, { Component } from 'react'
import Message from '../Message'
//import MessageStatus from '../MessageStatus'
//import TypingIndicator from '../TypingIndicator'
import style from './style.css'

class ConversationThread extends Component {
  componentDidMount() {
    window.addEventListener('load', function(event) {
      this.threadList.scrollTop = this.threadList.scrollHeight; 
    }.bind(this));
  }

  render() {
    const { conversation, onSendMessage, onReceivedMessage, onReadMessage, onStartTyping } = this.props
    var messages = [<li className={style.listPadder}></li>]
    for (let index in conversation.messages) {
      messages.unshift(<Message key={index} message={conversation.messages[index]} />)
    }
    return (
      <div className={style.threadContainer}>
        <ul ref={(c) => this.threadList = c}>{messages}</ul>
      </div>
    )
  }
}

export default ConversationThread
