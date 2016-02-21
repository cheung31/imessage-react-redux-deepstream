
import React, { Component } from 'react'
import style from './style.css'

class MessageInput extends Component {
  render() {
    return (
      <div className={style.messageInput}>
        <textarea placeholder="Enter a message..." rows="1"></textarea>
        <a href="#" className={style.button}>Send</a>
      </div>
    )
  }
}

export default MessageInput
