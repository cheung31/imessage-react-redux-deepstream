
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as RecipientsListActions from '../../actions/recipientsList'
import style from './style.css'

class MessageRecipients extends Component {
  onClickAddRecipient(e) {
    e.preventDefault()
    const { actions } = this.props
    actions.toggle()
  }

  render() {
    const { users, recipients } = this.props
    return (
      <div className={style.messageRecipients}>
        <span className={style.toLabel}>To:</span>
        <textarea row="1" value={recipients.join(', ')}></textarea> 
        <a href="#" className={style.titleRightAction} onClick={this.onClickAddRecipient.bind(this)}>+</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  var draftState = state.draft
  return {
    recipients: draftState.recipients,
    availableRecipients: draftState.availableRecipients,
    body: draftState.body
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RecipientsListActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageRecipients)
