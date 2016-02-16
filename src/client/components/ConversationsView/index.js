
import React, { Component } from 'react'
import ConversationsListHeader from '../ConversationsListHeader'
import ConversationsListView from '../ConversationsListView'
import style from './style.css'

class ConversationsView extends Component {
  render() {
    return (
      <section className={style.conversations}>
        <ConversationsListHeader />
        <ConversationsListView />
      </section>
    )
  }
}

export default ConversationsView
