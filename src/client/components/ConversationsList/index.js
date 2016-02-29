
import React, { Component } from 'react'
import ConversationsListItem from '../ConversationsListItem'
import style from './style.css'

class ConversationsList extends Component {
  render() {
    const { selectedConversation, conversations, conversationsById, onConversationClick } = this.props
    var items = []
    for (let index in conversations) {
      var conversationId = conversations[index]
      items.push(<li key={conversationId} className={selectedConversation == conversationId ? style.selectedListItem : ''}><ConversationsListItem conversation={conversationsById[conversationId]} /></li>)
    }
    return (
      <ul className={style.conversationsList}>{items}</ul>
    )
  }
}

export default ConversationsList
