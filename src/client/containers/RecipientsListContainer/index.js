
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RecipientsList from '../../components/RecipientsList'
import * as UserActions from '../../actions/users'
import style from './style.css'

class RecipientsListContainer extends Component {
  render() {
    const { users, showRecipientsList } = this.props
    return (
      <RecipientsList users={users} visible={showRecipientsList} />
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
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
