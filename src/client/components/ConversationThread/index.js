
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../Message'
import App from '../../containers/App'
//import MessageStatus from '../MessageStatus'
//import TypingIndicator from '../TypingIndicator'
import style from './style.css'

class ConversationThread extends Component {
  componentDidMount() {
    window.addEventListener('load', function(event) {
      setTimeout(function () {
      this.threadList.scrollTop = this.threadList.scrollHeight * 2; 
      }.bind(this), 750);
    }.bind(this));
  }

  componentWillReceiveProps() {
    const { profile, selectedConversation } = this.props
    if (profile.username && selectedConversation) {
        console.log("SUBSCRIBING TO: ", selectedConversation)
        this.conversationRecord = App.ds.record.getRecord(selectedConversation)
        this.conversationRecord.subscribe('messages', function (messages) {
          this.setState({ messages: messages })
        }.bind(this))
    }
  }

  componentWillUnmount() {
      this.conversationRecord.unsubscribe('messages')
  }

  render() {
    const { conversation, onSendMessage, onReceivedMessage, onReadMessage, onStartTyping } = this.props

    var messages = this.state ? this.state.messages : []
    if (!messages.length && conversation) {
        messages = conversation.messages
    }
    var messageItems= [<li className={style.listPadder}></li>]
    if (conversation) {
        console.log('<<< SHOWING THREAD: ', conversation.id);
        console.log('<<< MESSAGES: ', messages);
        for (let index in messages) {
          var message = messages[index]
          messageItems.push(<Message key={message} message={message} />)
        }
    }
    return (
      <div className={style.threadContainer}>
        <ul ref={(c) => this.threadList = c}>{messageItems}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    selectedConversation: state.selectedConversation
  }
}

export default connect(
  mapStateToProps
)(ConversationThread)
