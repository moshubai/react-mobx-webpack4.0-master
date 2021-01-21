import React, { useState, useEffect, useMemo, useCallback } from 'react'
import './home.scss'
import { history } from 'func'
import { Button, Input } from 'antd'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

const HookFountion = () => {
  const [count, setCount] = useState(0)

  const addClick = useCallback(() => {
    console.log('addClick')
    let num = 0
    for (let i = 0; i < count; i++) {
      num += i
    }
    return num
  }, [count])

  const [value, setValue] = useState('')

  return (
    <div>
      <p>hook Api 的使用</p>
      <p>count{count}</p>
      <Button onClick={() => setCount(count + 1)}>add</Button>
      <Input value={value} onChange={event => setValue(event.target.value)} placeholder='Basic usage' />
      <Child addClick={addClick}/>
    </div>
  )
}
class Child extends React.PureComponent {
  render () {
    const { addClick } = this.props
    console.log('Child    render')
    return (
      <React.Fragment>
        <h3>Child</h3>
        <Button onClick={() => console.log(addClick())}>点击按钮啊</Button>
      </React.Fragment>
    )
  }
}
Child.propTypes = {
  addClick:PropTypes.func
}

@inject('example')
@observer

class App extends React.PureComponent {
  static propTypes = {
    example: PropTypes.object
  }

  componentDidMount () {
    console.log('555')
  }

  // log = () => {
  //   console.log('这是点击事件')
  // }

  // goPage = () => {
  //   history.push('/example')
  // }

  render () {
    const { todos } = this.props.example
    return (
      <React.Fragment>
        <div>
          <HookFountion />
        </div>
        <p>
          <Button>123</Button>
        </p>
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
