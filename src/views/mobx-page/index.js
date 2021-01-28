import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag, Input, Table } from 'antd'
import '../style'

const xuhua = (Tmpl) => {
  class Xu extends Tmpl {
    state = {
      name: 'pangzhu',
      ...this.state
    }

    componentDidMount () {
      super.componentDidMount()
    }

    add () {
      console.log('事件传递')
    }

    getNum (val) {
      console.log(val)
    }

    render () {
      return <div>
        <Button onClick={() => this.getNum(this.props.num)}>{this.props.num}</Button>
        {super.render()}
      </div>
    }
  }
  return Xu
}

@xuhua

class Fnline extends React.Component {
  static propTypes = {
    num: PropTypes.number
  }

  componentDidMount () {
    this.add()
  }

  render () {
    return <div>这是：{this.props.num}</div>
  }
}
@inject('example')
@observer
class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }

  state = {
    jinzhu: '测试count',
    counters: 0
  }

  componentDidMount () {
    console.log(this.props)
    document.getElementById('test').addEventListener('click', this.setCounters)
  }

  upFn = () => {
    const { add } = this.props.example
    add()
  }

  downFn = () => {
    const { down } = this.props.example
    down()
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
        counters:state.counters + v
      }
    })
  }

  setCounters = () => {
    // setState在setTimeout和原生事件 中是同步的
    setTimeout(() => {
      this.changeVal(1)
      this.changeVal(2)
    }, 0)
  }

  render () {
    const { count } = this.props.example
    const { counters } = this.state
    return (
      <React.Fragment>
        props的数字传递：{count}
        <p><Button onClick={this.upFn}>增加</Button></p>
        <p><Button onClick={this.downFn}>减少</Button></p>
        <Fnline num={count} />
        <Button onClick={this.setCounters}>{counters}</Button>
        <Button id='test'>原生：{counters}</Button>
      </React.Fragment>

    )
  }
}
export default App
