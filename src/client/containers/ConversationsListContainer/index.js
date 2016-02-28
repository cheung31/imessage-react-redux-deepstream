
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ConversationsList from '../../components/ConversationsList'
import style from './style.css'

class ConversationsListContainer extends Component {
  render() {
    const { selectedConversation, conversations, conversationsById } = this.props
      return (
        <ConversationsList
            selectedConversation={selectedConversation}
            conversations={conversations}
            conversationsById={conversationsById} />
      )
  }
}

function mapStateToProps(state) {
  var conversationsState = state.conversations
  return {
    selectedConversation: state.selectedConversation,
    conversations: conversationsState.conversations,
    conversationsById: conversationsState.conversationsById
  }
}

export default connect(
  mapStateToProps
)(ConversationsListContainer)
