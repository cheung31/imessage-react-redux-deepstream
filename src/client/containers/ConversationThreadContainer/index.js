
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
    const { conversation, selectedConversation, conversationsById, showRecipientsList, actions } = this.props
    console.log('SELECTED CONVERSATION: ', selectedConversation);
    return (
      <div>
          <ConversationHeader titleLabel={conversation ? conversation.title : 'FUCK'} />
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
    selectedConversation: state.selectedConversation,
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
