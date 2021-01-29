import React, { useState } from 'react'
import { AppContext } from './context'
import { Button } from 'antd'
export const ChildOne = () => {
  const [buttonText, setButtonText] = useState('Click me,   please')
  const handleClick = () => {
    console.log(this)
    setButtonText('Thanks, been clicked!')
  }
  const infoObj = React.useContext(AppContext)
  console.log('infoObj', infoObj) // log
  const { username, title } = infoObj
  return (
        <div>
            <h3>函数组件：使用useContext</h3>
            <p>{username}</p>
            <p>{title}</p>
            <h3>函数组件：使用hook</h3>
            <Button onClick={handleClick}>{buttonText}{name}</Button>
        </div>
  )
}
