import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag, Input, Table } from 'antd'
import '../style'
import { withRef, listenersEvent, eventEmitter, selfClick } from 'func'

@listenersEvent(['test', 'testOne', 'testTwo'])
@withRef
class App extends React.Component {
  static propTypes = {
    // example: PropTypes.object
  }

  state={
    value:''
  }

  componentDidMount () {
    // console.log(eventEmitter)
  }

  testCallback = (str) => {
    console.log(str)
  }

  testOneCallback = (str) => {
    console.log(str)
  }

  testTwoCallback = (str) => {
    console.log(str)
  }

  zaidianwo =() => {
    eventEmitter.emit('test', '测试1') // EventEmitter
    eventEmitter.emit('testOne', '测试2')
    eventEmitter.emit('testTwo', '测试3')
  }

  change=val => {
    console.log(val.target.value)
    this.setState({ value:val.target.value.trim() })
  }

  three=() => {
    selfClick(3, () => {
      console.log('点击了三次')
    })
  }

  render () {
    return (
      <div>
        <p>123</p>
        <Input onChange={this.change} />
        <Button onClick={this.zaidianwo}>EventEmitter测试</Button>
        <Button type='primary' onClick={this.three}>三击</Button>
      </div>
    )
  }
}
export default App
