
import React, { Component } from 'react'
import style from './style.css'

class RecipientsListItem extends Component {
  render() {
    const { user } = this.props
        debugger;
    return (
      <div className={style.listItem}>
        <h3>{user}</h3>
      </div>
    )
  }
}

export default RecipientsListItem
