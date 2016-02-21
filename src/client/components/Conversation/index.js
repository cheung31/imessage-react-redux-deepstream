
import React, { Component } from 'react'
import ConversationThreadContainer from '../../containers/ConversationThreadContainer'
import ConversationInput from '../ConversationInput'
import style from './style.css'

class Conversation extends Component {
  render() {
    const { conversation } = this.props
    return (
      <section className={style.conversation}>
        <ConversationThreadContainer />
      </section>
    )
  }
}

export default Conversation
