import React from 'react'
import './home.scss'
import { history } from 'func'
import { Button } from 'antd'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('example')
@observer
class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }

  log = () => {
    console.log('这是点击事件')
  }

  goPage=() => {
    history.push('/example')
  }

  render () {
    const { todos } = this.props.example
    return (
      <React.Fragment>
        <div>
          你可以用他做任何事情
        </div>
        <Button onClick={this.log}>
          点我
        </Button>
        <Button onClick={this.goPage}>
          路由1
        </Button>
        <ul>
          {todos.map((v, i) => {
            return (
            <li key={i}>{v.title}</li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}

export default App
