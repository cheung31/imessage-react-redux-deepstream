
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ConversationHeader from '../../components/ConversationHeader'
import ConversationThread from '../../components/ConversationThread'
import MessageInput from '../../components/MessageInput'
import MessageRecipients from '../../components/MessageRecipients'
import RecipientsListContainer from '..//RecipientsListContainer'
import * as ConversationActions from '../../actions/conversations'
import * as DraftActions from '../../actions/draft'
import style from './style.css'

class ConversationThreadContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { newConversation, draftActions, profile, conversation, selectedConversation, conversationsById, showRecipientsList, actions } = nextProps
    var conv = conversationsById[selectedConversation] || conversation
    if (conv && conv.participants) {
        var filtered = conv.participants.filter(function (participant) {
            if (participant !== 'users/'+profile.username) {
                return true
            }
            return false
        })
        draftActions.clearDraft()
        if (!newConversation) {
            for (let userId of filtered) {
                console.log('RECIPIENT:', conv.id, userId);
                console.log(nextProps);
                draftActions.addRecipient(userId.split('/')[1])
            }
        }
    }
  }

  render() {
    const { conversation, selectedConversation, conversationsById, showRecipientsList, actions } = this.props
    console.log('SELECTED CONVERSATION: ', selectedConversation);
    var conv = conversationsById[selectedConversation] || conversation
    return (
      <div>
          <ConversationHeader titleLabel={conv ? conv.title : ''} />
          <MessageRecipients/>
          <RecipientsListContainer visible={showRecipientsList} />
          <ConversationThread
            conversation={conv}
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
    newConversation: state.newConversation,
    profile: state.profile,
    selectedConversation: state.selectedConversation,
    conversationsById: conversationsState.conversationsById,
    showRecipientsList: state.recipientsList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ConversationActions, dispatch),
    draftActions: bindActionCreators(DraftActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationThreadContainer)
