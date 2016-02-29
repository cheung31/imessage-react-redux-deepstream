
import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

class ConversationHeader extends Component {
  render() {
    const { newConversation, titleLabel } = this.props
    return (
      <header className={style.header}>
        <div className={style.title}>
          <span className={style.titleLabel}>{newConversation ? 'New message' : titleLabel}</span>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  var conversationsState = state.conversations
  return {
    newConversation: state.newConversation
  }
}
export default connect(mapStateToProps)(ConversationHeader)
