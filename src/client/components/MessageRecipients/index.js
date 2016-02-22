
import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as RecipientsListActions from '../../actions/recipientsList'
import style from './style.css'

class MessageRecipients extends Component {
  onClickAddRecipient(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(RecipientsListActions.toggle())
  }

  render() {
    const { users } = this.props
    return (
      <div className={style.messageRecipients}>
        <span className={style.toLabel}>To:</span>
        <textarea row="1"></textarea> 
        <a href="#" className={style.titleRightAction} onClick={this.onClickAddRecipient.bind(this)}>+</a>
      </div>
    )
  }
}

export default connect()(MessageRecipients)
