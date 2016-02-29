
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import App from '../../containers/App'

import style from './style.css'

class ConversationListItem extends Component {
  componentWillReceiveProps(nextProps) {
    const { conversation } = nextProps
    if (conversation) {
        this.conversationRecord = App.ds.record.getRecord(conversation.id)
        this.conversationRecord.whenReady(() => {
          var lastMessage = this.conversationRecord.get('lastMessage')
          this.setState({ lastMessage: lastMessage })

          this.conversationRecord.subscribe('lastMessage', (lastMessage) => {
            this.setState({ lastMessage: lastMessage })
          })
        })
    }
  }

  componentWillUnmount() {
    if (this.conversationRecord) {
        this.conversationRecord.unsubscribe('lastMessage')
    }
  }

  render() {
    const { conversation } = this.props
    return (
      <Link className={style.listItem} to={conversation ? '/'+conversation.id : '/'}>
        <h3>{conversation ? conversation.title : ''}</h3>
        <span className={style.listDescription}>{this.state ? this.state.lastMessage : ''}</span>
      </Link>
    )
  }
}

export default connect()(ConversationListItem)
