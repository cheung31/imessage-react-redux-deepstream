
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Conversations from '../../components/Conversations'
import Conversation from '../../components/Conversation'
import * as ConversationActions from '../../actions/conversations'
import style from './style.css'

class NewConversation extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(ConversationActions.addConversation({
        title: 'New Message'
    }))
  }

  render() {
    const { conversation, conversations } = this.props
    return (
      <div>
        <Conversations conversations={conversations} />
        <Conversation conversation={conversation} />
      </div>
    )
  }
}

export default connect()(NewConversation)
