
import React, { Component } from 'react'
import { connect } from 'react-redux'

import App from '../../containers/App'
import style from './style.css'

class Message extends Component {
  componentDidMount() {
    const { message } = this.props
    console.log('<<< MESSAGE ID: ', message);
    this.record = App.ds.record.getRecord(message);
    this.record.whenReady( function() {
        this.setState(this.record.get() );
        console.log(this.state.body);
    }.bind( this ));   
  }

  render() {
    const { profile } = this.props
    return (
      <li className={style.messageWrapper}>
        <div className={'users/'+profile.username == (this.state && this.state.author) ? style.messageRight : style.message}>
        { this.state ? this.state.body : '' }
        </div>
      </li> 
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Message)
