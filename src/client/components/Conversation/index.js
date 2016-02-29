
import React, { Component } from 'react'
import ConversationThreadContainer from '../../containers/ConversationThreadContainer'
import style from './style.css'

class Conversation extends Component {
  render() {
    const { conversation } = this.props
    console.log('~~~ a');
    return (
      <section className={style.conversation}>
        <ConversationThreadContainer conversation={conversation}/>
      </section>
    )
  }
}

export default Conversation
