
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
    const { users, profile, visible } = this.props
    var items = []
    var filtered = users.filter(function (user) {
        if (user == 'users/' + profile.username) {
            return false
        }
        return true
    })
    console.log(filtered, profile.username)
    for (let index in filtered) {
        items.push(<RecipientsListItem key={filtered[index]} user={filtered[index]} />)
    }
    return (
      <div className={[visible ? style.recipientsListVisible : style.recipientsList, style.animate].join(' ')}>
        <header className={style.header}>
            <div className={style.title}>
                <span className={style.titleLabel}>Send To</span>
                <a href="#" className={style.titleRightAction} onClick={this.onCancelRecipientsList.bind(this)}>Cancel</a>
            </div>
        </header>
        <ul>{items}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(RecipientsList)
