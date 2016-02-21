
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ConversationsList from '../../components/ConversationsList'
import * as ConversationActions from '../../actions/conversations'
import style from './style.css'

class ConversationsListContainer extends Component {
  render() {
    const { selectedConversation, conversations, conversationsById, actions } = this.props
      return (
        <ConversationsList
            selectedConversation={selectedConversation}
            conversations={conversations}
            conversationsById={conversationsById} 
            onConversationClick={actions.viewConversation} />
      )
  }
}

function mapStateToProps(state) {
  var conversationsState = state.conversations
  return {
    selectedConversation: conversationsState.selectedConversation,
    conversations: conversationsState.conversations,
    conversationsById: conversationsState.conversationsById
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ConversationActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationsListContainer)
