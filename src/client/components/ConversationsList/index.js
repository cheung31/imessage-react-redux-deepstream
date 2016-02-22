
import React, { Component } from 'react'
import ConversationsListItem from '../ConversationsListItem'
import style from './style.css'

class ConversationsList extends Component {
  render() {
    const { selectedConversation, conversations, conversationsById, onConversationClick } = this.props
    var items = []
    for (let index in conversations) {
      items.push(<li key={index} className={selectedConversation == index ? style.selectedListItem : ''}><ConversationsListItem conversation={conversations[index]} /></li>)
    }
    return (
      <ul>{items}</ul>
    )
  }
}

export default ConversationsList
