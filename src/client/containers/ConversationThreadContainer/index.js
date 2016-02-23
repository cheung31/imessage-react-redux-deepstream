
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ConversationHeader from '../../components/ConversationHeader'
import ConversationThread from '../../components/ConversationThread'
import MessageInput from '../../components/MessageInput'
import MessageRecipients from '../../components/MessageRecipients'
import RecipientsListContainer from '..//RecipientsListContainer'
import * as ConversationActions from '../../actions/conversations'
import style from './style.css'

class ConversationThreadContainer extends Component {
  render() {
    const { selectedConversation, conversationsById, showRecipientsList, actions } = this.props
    const conversation = conversationsById && conversationsById[selectedConversation] ? conversationsById[selectedConversation] : {}
    return (
      <div>
          <ConversationHeader titleLabel={conversation.title} />
          <MessageRecipients />
          <RecipientsListContainer visible={showRecipientsList} />
          <ConversationThread
            conversation={conversation}
            onSendMessage={actions.sendMessage}
            onReceiveMessage={actions.receiveMessage}
            onReadMessage={actions.readMessage}
            onStartTyping={actions.startTyping} />
          <MessageInput />
      </div>
    )
  }
}

function mapStateToProps(state) {
  var conversationsState = state.conversations
  return {
    selectedConversation: conversationsState.selectedConversation,
    conversationsById: conversationsState.conversationsById,
    showRecipientsList: state.recipientsList
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
)(ConversationThreadContainer)