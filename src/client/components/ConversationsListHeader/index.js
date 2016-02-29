import React, { Component } from 'react'
import * as ConversationActions from '../../actions/conversations'
import style from './style.css'

class ConversationsListHeader extends Component {
  render() {
      const users = this.props.users
      return (
        <header className={style.header}>
            <div className={style.title}>
                <span className={style.titleLabel}>Messages</span>
                <a href="#" className={style.titleRightAction} >+</a>
            </div>
        </header>
      )
  }
}

export default ConversationsListHeader
