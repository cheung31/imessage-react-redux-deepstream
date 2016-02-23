
import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecipientsListItem from '../RecipientsListItem'
import * as RecipientsListActions from '../../actions/recipientsList'
import style from './style.css'

class RecipientsList extends Component {
  onCancelRecipientsList(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(RecipientsListActions.toggle())
  }

  render() {
    const { users, visible } = this.props
    var items = []
    for (let index in users) {
      items.push(<RecipientsListItem key={index} user={users[index]} />)
    }
    return (
      <div className={[visible ? style.recipientsListVisible : style.recipientsList, style.animate].join(' ')}>
        <header className={style.title}>
            <span className={style.titleLabel}>All Contacts</span>
            <a href="#" className={style.titleRightAction} onClick={this.onCancelRecipientsList.bind(this)}>Cancel</a>
        </header>
        <ul>{items}</ul>
      </div>
    )
  }
}

export default connect()(RecipientsList)
