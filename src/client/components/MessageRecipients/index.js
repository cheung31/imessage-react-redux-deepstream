
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
    const { newConversation } = this.props
    var addRecipientButton
    if (newConversation) {
        addRecipientButton = 
          <a href="#" className={style.titleRightAction} onClick={this.onClickAddRecipient.bind(this)}>+</a>
    }
    const { recipients } = this.props
    var recipientsPretty = recipients.map(function (recipient) {
        return recipient.split('/')[1]
    })
    return (
      <div className={style.messageRecipients}>
        <span className={style.toLabel}>To:</span>
        <textarea row="1" value={recipientsPretty.join(', ')}></textarea> 
        {addRecipientButton}
      </div>
    )
  }
}

function mapStateToProps(state) {
  var draftState = state.draft
  return {
    newConversation: state.newConversation,
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
