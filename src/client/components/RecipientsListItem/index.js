
import React, { Component } from 'react'
import style from './style.css'
import deepstream from 'deepstream.io-client-js'
import App from '../../containers/App'

class RecipientsListItem extends Component {
  render() {
    const { user } = this.props
    const userRecord = App.ds.record.getRecord(user).get()
    return (
      <li className={style.recipientsListItem}>
        <h3>{userRecord.username}</h3>
      </li>
    )
  }
}

export default RecipientsListItem
