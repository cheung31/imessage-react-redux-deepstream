
import React, { Component } from 'react'
import Message from '../Message'
//import MessageStatus from '../MessageStatus'
//import TypingIndicator from '../TypingIndicator'
import style from './style.css'

class ConversationThread extends Component {
  componentDidMount() {
    window.addEventListener('load', function(event) {
      setTimeout(function () {
      this.threadList.scrollTop = this.threadList.scrollHeight * 2; 
      }.bind(this), 750);
    }.bind(this));
  }

  render() {
    const { conversation, onSendMessage, onReceivedMessage, onReadMessage, onStartTyping } = this.props
    var messages = [<li className={style.listPadder}></li>]
    if (conversation) {
        console.log('<<< SHOWING THREAD: ', conversation.id);
        console.log('<<< MESSAGES: ', conversation.messages);
        for (let index in conversation.messages) {
          var message = conversation.messages[index]
          messages.push(<Message key={message} message={message} />)
        }
    }
    return (
      <div className={style.threadContainer}>
        <ul ref={(c) => this.threadList = c}>{messages}</ul>
      </div>
    )
  }
}

export default ConversationThread
