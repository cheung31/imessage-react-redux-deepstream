
import React, { Component } from 'react'
import { connect } from 'react-redux'

import style from './style.css'
import deepstream from 'deepstream.io-client-js'
import App from '../../containers/App'
import * as DraftActions from '../../actions/draft'
import * as RecipientsListActions from '../../actions/recipientsList'

class RecipientsListItem extends Component {
  onClick(e) {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(DraftActions.addRecipient(this.state.username))
    dispatch(RecipientsListActions.toggle())
  }

  componentDidMount() {
    const { user } = this.props
    this.record = App.ds.record.getRecord(user);
    this.record.whenReady( function() {
        this.setState(this.record.get() );
    }.bind( this ));
  }

  componentWillUnmount() {
    this.record.discard()
  }

  render() {
    return (
      <li className={style.recipientsListItem} onClick={this.onClick.bind(this)}>
        <h3>{this.state ? this.state.username : 'wut'}</h3>
      </li>
    )
  }
}

export default connect()(RecipientsListItem)
