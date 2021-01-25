
import React, { useState, useContext } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Button, Tag, Input, Table } from 'antd'
const AppContext = React.createContext({ username: '备胎', title: '三备胎' })
const Navbar = () => {
  const { username } = useContext(AppContext)
  return (
    <div className='navbar'>
      <p>我的名字是：{username}</p>
    </div>
  )
}
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = AppContext;
  render () {
    console.log(this.context)
    return <p>介绍：{this.context.title}</p>
  }
}
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar (props) {
  return (
    <div>
      <ThemedButton />

    </div>
  )
}
export default function Istry ({ name }) {
  const [buttonText, setButtonText] = useState('Click me,   please')
  const handleClick = () => {
    console.log(this)
    setButtonText('Thanks, been clicked!')
  }

  return <div>
    <AppContext.Provider value={{
      username: '现任',
      title: '本宫'
    }}>
      <div className='App'>
        <Navbar />
        <Toolbar />
      </div>
    </AppContext.Provider>
    <Button onClick={handleClick}>{buttonText}{name}</Button>
    测试组件111
  </div>
}
