
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Conversations from '../../components/Conversations'
import Conversation from '../../components/Conversation'
import * as ConversationActions from '../../actions/conversations'
import App from '../../containers/App'
import style from './style.css'

class NewConversation extends Component {
  render() {
    return (
      <div>
        <Conversations/>
        <Conversation/>
      </div>
    )
  }
}

export default connect()(NewConversation)
