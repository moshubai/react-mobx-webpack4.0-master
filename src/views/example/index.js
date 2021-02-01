import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import './style'

class SetState extends React.Component {
  state = {
    counters: 0
  }

  componentDidMount () {
  }

  changeVal = (v) => {
    // this.setState({
    //   counters: this.state.counters + v
    // },
    // // callBack 就是在state更新完成后执行
    // () => {
    //   console.log('counters', this.state.counters)
    // }
    // )
    this.setState((state) => {
      return {
        counters: state.counters + v
      }
    })
  }

  setCounters = () => {
    console.log('./.')
    // setState在setTimeout和原生事件 中是同步的
    setTimeout(() => {
      this.changeVal(1)
      this.changeVal(2)
    }, 0)
  }

  render () {
    const { counters } = this.state
    return (
      <React.Fragment>
        <h2>this.setState 的同步和异步</h2>
        <h6>{counters}</h6>
        <Button onClick={() => this.setCounters()}>点击</Button>
      </React.Fragment>

    )
  }
}
export default SetState
