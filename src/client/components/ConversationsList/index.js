
import React, { Component } from 'react'
import ConversationsListItem from '../ConversationsListItem'
import style from './style.css'

class ConversationsList extends Component {
  render() {
    const { newConversation, selectedConversation, conversations, conversationsById, onConversationClick } = this.props
    var items = []
    if (newConversation) {
        items.push(<li key={'newConv'} className={style.selectedListItem}><ConversationsListItem conversation={{title: 'New message'}} /></li>)
    }
    for (let index in conversations) {
      var conversationId = conversations[index]
      items.push(<li key={conversationId} className={selectedConversation == conversationId && !newConversation? style.selectedListItem : ''}><ConversationsListItem conversation={conversationsById[conversationId]} /></li>)
    }
    return (
      <ul className={style.conversationsList}>{items}</ul>
    )
  }
}

export default ConversationsList
