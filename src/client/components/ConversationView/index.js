
import React, { Component } from 'react'
import ConversationHeader from '../ConversationHeader'
import ConversationThreadView from '../ConversationThreadView'
import style from './style.css'

class ConversationView extends Component {
  render() {
    return (
      <section className={style.conversation}>
        <ConversationHeader />
        <ConversationThreadView />
      </section>
    )
  }
}

export default ConversationView
