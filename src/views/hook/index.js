import React, { useState, useEffect, useMemo } from 'react'
import { Button, Input } from 'antd'
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
    document.title = `点击了${titleCount}次`
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

class HookPages extends React.Component {
  componentDidMount () {
    console.log('555')
  }

  render () {
    return (
      <React.Fragment>
        <div>
          Hook 练习
          <FunctionComponent />
        </div>
      </React.Fragment>
    )
  }
}

export default HookPages
