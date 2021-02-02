import React, { useState, useEffect, useMemo } from 'react'
import { Button, Input, Divider } from 'antd'
import PropTypes from 'prop-types'

// 自定义hook 必须以use开头
const useTimer = () => {
  const [date, setDate] = useState(new Date())
  // 解决 hook useEffect 内存泄露问题
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

const HookUseTimer = () => {
  return (
    <div>
      {useTimer().toLocaleTimeString()}
    </div>
  )
}
export default HookUseTimer
