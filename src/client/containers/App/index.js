
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.css'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
