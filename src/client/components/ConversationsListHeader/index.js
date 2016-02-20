import React, { Component } from 'react'
import style from './style.css'

class ConversationsListHeader extends Component {
  render() {
      return (
        <header className={style.header}>
            <div className={style.title}>Messages</div>
        </header>
      )
  }
}

export default ConversationsListHeader
