import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import style from './style.css'
import * as NewConversationActions from '../../actions/newConversation'
import * as DraftActions from '../../actions/draft'

class ConversationsListHeader extends Component {
  onAddConversationClick(e) {
      e.preventDefault()
      const { dispatch } = this.props
      browserHistory.push('/')
  }

  render() {
      const users = this.props.users
      return (
        <header className={style.header}>
            <div className={style.title}>
                <span className={style.titleLabel}>Messages</span>
                <a onClick={this.onAddConversationClick.bind(this)} href="#" className={style.titleRightAction} >+</a>
            </div>
        </header>
      )
  }
}

export default connect()(ConversationsListHeader)
