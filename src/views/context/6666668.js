import React, { useState, useEffect, useMemo } from 'react'
import './home.scss'
import { history } from 'func'
import { Button, Input } from 'antd'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

// 自定义hook 必须以use开头
const useTimer = () => {
  const [date, setDate] = useState(new Date())
  // 解决 hook useEffect 内存泄露问题
  // 必须最外层调用
  // 必须函数组件中调用，或者自定义hook调用
  useEffect(() => {
    window.timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(window.timer)
      window.timer = null
    }
  }, [])
  return date
}

const FunctionComponent = () => {
  const [titleCount, setTitleCount] = useState(0)
  useEffect(() => {
    console.log('useEffect----titleCount')
    document.title = `点击了${titleCount}次`
    // return () => {
    // }
  }, [titleCount])

  const expensive = useMemo(() => {
    console.log('expensive')
    let num = 0

    for (let i = 0; i < titleCount; i++) {
      num += i
    }

    return num
  }, [titleCount])

  const [value, setValue] = useState('')

  return (
    <div>
      {useTimer().toLocaleTimeString()}
      <p><Button onClick={() => setTitleCount(titleCount + 1)}>点击事件</Button></p>
      <p>expensive:{expensive}</p>
      <Input value={value} onChange={event => setValue(event.target.value)} placeholder='Basic usage' />
    </div>
  )
}

@inject('example')
@observer

class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }

  componentDidMount () {
    console.log('555')
  }

  log = () => {
    console.log('这是点击事件')
  }

  goPage = () => {
    history.push('/example')
  }

  render () {
    const { todos } = this.props.example
    return (
      <React.Fragment>
        <div>
          你可以用他做任何事情
          <FunctionComponent />
        </div>
        <Button onClick={this.log}>
          点我
        </Button>
        <Button onClick={this.goPage}>
          路由
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
