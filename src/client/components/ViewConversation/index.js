
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Conversations from '../../components/Conversations'
import Conversation from '../../components/Conversation'
import * as SelectedConversationActions from '../../actions/selectedConversation'
import * as DraftActions from '../../actions/draft'
import App from '../../containers/App'
import style from './style.css'

class ViewConversation extends Component {
  componentWillMount() {
    const { params, conversationsById} = this.props
    const selectedConversation = 'conversations/'+params.conversationId
    this.setState({
      selectedConversation: selectedConversation
    });
  }

  componentWillReceiveProps(nextProps) {
    const { actions, draftActions, conversationsById } = this.props
    const selectedConversation = 'conversations/'+nextProps.params.conversationId
    console.log('<<< SWITCHING TO: ', selectedConversation);
    actions.viewConversation(selectedConversation)
    this.setState({
      selectedConversation: selectedConversation
    });
  }

  render() {
    const { params, conversationsById } = this.props
        console.log('state', this.state.selectedConversation);
    const selectedConversation = this.state.selectedConversation
    const conversation = selectedConversation? conversationsById[selectedConversation] : undefined
    console.log('<<< RENDERING CONV: ', conversation);
    return (
      <div>
        <Conversations selectedConversation={selectedConversation? selectedConversation : undefined}/>
        <Conversation conversation={conversation} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  var conversationsState = state.conversations
  return {
    selectedConversation: state.selectedConversation,
    conversationsById: conversationsState.conversationsById,
    conversations: conversationsState.conversations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SelectedConversationActions, dispatch),
    draftActions: bindActionCreators(DraftActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewConversation)
