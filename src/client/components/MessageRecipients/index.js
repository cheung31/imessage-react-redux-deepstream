
import React, { Component } from 'react'
import style from './style.css'

class MessageRecipients extends Component {
  render() {
    //const { users } from this.props
    return (
      <div className={style.messageRecipients}>
        <span className={style.toLabel}>To:</span>
        <textarea row="1"></textarea> 
        <a href="#" className={style.titleRightAction} >+</a>
      </div>
    )
  }
}

export default MessageRecipients
