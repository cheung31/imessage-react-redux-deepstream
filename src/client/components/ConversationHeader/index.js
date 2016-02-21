
import React, { Component } from 'react'
import style from './style.css'

class ConversationHeader extends Component {
  render() {
    const { titleLabel } = this.props
    return (
      <header className={style.header}>
        <div className={style.title}>
          <span className={style.titleLabel}>{titleLabel}</span>
        </div>
      </header>
    )
  }
}

export default ConversationHeader
