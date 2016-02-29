
import React, { Component } from 'react'
import ConversationsListHeader from '../ConversationsListHeader'
import ConversationsListContainer from '../../containers/ConversationsListContainer'
import style from './style.css'

class Conversations extends Component {
  render() {
    const { conversations } = this.props
    return (
      <section className={style.conversations}>
        <ConversationsListHeader />
        <ConversationsListContainer />
      </section>
    )
  }
}

export default Conversations
