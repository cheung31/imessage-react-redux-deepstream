
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.css'
import App from '../../containers/App'
import * as DraftActions from '../../actions/draft'

function getTitleFromRecipients(recipients) {
    return title
}

class MessageInput extends Component {
  onKeyPress(e) {
    if (e.which != 13 || event.shiftKey) {
      return
    }
    e.preventDefault()
    const { dispatch, draft } = this.props

    // If no recipients, no-op
    //debugger;
    //if (draft.recipients.length == 0) {
    //    console.log('Message has no recipients!')
    //    return
    //}

    var messageBody = e.target.value
    if (messageBody) {
        dispatch(DraftActions.sendNewDraft(messageBody))
    }
  }

  onSendClick(e) {
    e.preventDefault()
    const { dispatch, draft } = this.props

    // If no recipients, no-op
    if (draft.recipients.length == 0) {
        console.log('Message has no recipients!')
        return
    }

    var messageBody = e.target.value
    //actions.addMessageBody(messageBody)
    if (messageBody) {
        dispatch(DraftActions.sendNewDraft(messageBody))
    }
  }

  render() {
    return (
      <div className={style.messageInput}>
        <textarea placeholder="Enter a message..." rows="1" onKeyPress={this.onKeyPress.bind(this)} ></textarea>
        <a href="#" className={style.button} onClick={this.onSendClick}>Send</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  var draftState = state.draft
  return {
    draft: draftState
  }
}

export default connect(
  mapStateToProps
)(MessageInput)
