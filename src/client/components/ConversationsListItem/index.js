
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ConversationActions from '../../actions/conversations'
import style from './style.css'

class ConversationListItem extends Component {
  onClick(e) {
      e.preventDefault()
      const { actions, conversation } = this.props
      actions.viewConversation(conversation.id)
  }

  render() {
    const { conversation } = this.props
    return (
      <div className={style.listItem} onClick={this.onClick.bind(this)}>
        <h3>{conversation ? conversation.title : 'ugh'}</h3>
        <span>{conversation ? conversation.lastMessage : ''}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedConversation: state.conversations.selectedConversation
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
)(ConversationListItem)
