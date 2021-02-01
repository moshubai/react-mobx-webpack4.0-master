import React from 'react'
import { AppContext } from './context'

class ChildClass extends React.Component {
  static contextType = AppContext
  render () {
    // const {infoObj}
    console.log('context', this.context) // log
    const { username, title } = this.context
    return (
      <div>
        <h3>类组件：使用contextType</h3>
        <p>{username}</p>
        <p>{title}</p>
      </div>
    )
  }
}

export default ChildClass
