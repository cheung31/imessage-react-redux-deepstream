
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import style from './style.css'

class ConversationListItem extends Component {
  render() {
    const { conversation } = this.props
    return (
      <Link className={style.listItem} to={conversation ? '/'+conversation.id : '/'}>
        <h3>{conversation ? conversation.title : 'ugh'}</h3>
        <span>{conversation ? conversation.lastMessage : ''}</span>
      </Link>
    )
  }
}

export default connect()(ConversationListItem)
