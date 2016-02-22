
import React, { Component } from 'react'
import RecipientsListItem from '../RecipientsListItem'
import style from './style.css'

class RecipientsList extends Component {
  render() {
    return (
      <div className={style.recipientsList}>
        <header className={style.title}>
            <span className={style.titleLabel}>All Contacts</span>
        </header>
        <ul>
        </ul>
      </div>
    )
  }
}

export default RecipientsList
