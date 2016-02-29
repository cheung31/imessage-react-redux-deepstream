
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Conversations from '../../components/Conversations'
import Conversation from '../../components/Conversation'
import * as ConversationActions from '../../actions/conversations'
import * as NewConversationActions from '../../actions/newConversation'
import * as DraftActions from '../../actions/draft'
import App from '../../containers/App'
import style from './style.css'

class NewConversation extends Component {
  componentWillMount() {
      const { dispatch } = this.props
      dispatch(NewConversationActions.newConversation(true))
      dispatch(DraftActions.clearDraft())
  }

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
