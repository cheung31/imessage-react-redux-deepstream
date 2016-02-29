
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RecipientsList from '../../components/RecipientsList'
import * as UserActions from '../../actions/users'
import style from './style.css'

class RecipientsListContainer extends Component {
  render() {
    const { users, selectedRecipients, showRecipientsList } = this.props
    var availableRecipients = users.filter(function (userRecordName) {
        if (userRecordName && selectedRecipients.indexOf(userRecordName) === -1) {
            return userRecordName
        } 
    })
    return (
      <RecipientsList users={availableRecipients} visible={showRecipientsList} />
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    selectedRecipients: state.draft.recipients,
    showRecipientsList: state.recipientsList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipientsListContainer)
