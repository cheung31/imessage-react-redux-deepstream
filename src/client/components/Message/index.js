
import React, { Component } from 'react'

import App from '../../containers/App'
import style from './style.css'

class Message extends Component {
  componentWillMount() {
    const { message } = this.props
    this.record = App.ds.record.getRecord(message);
    this.record.whenReady( function() {
        this.setState(this.record.get() );
    }.bind( this ));   
  }

  render() {
    return (
      <li className={style.message}>
        { this.state ? this.state.body : 'fuckkkkk' }
      </li> 
    )
  }
}

export default Message
