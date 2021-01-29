import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import './home.scss'
import { history } from 'func'
import { Button, Input } from 'antd'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// useContext 的理解
// const AppContext = React.createContext({ username: '备胎', title: '三备胎' })
const themes = {
  light: {
    foreground: '#000000',
    background: '#ff0000'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext(themes.light)
function Toolbar (props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton () {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  )
}
// const Navbar = () => {
//   const { username } = useContext(AppContext)
//   return (
//     <div className='navbar'>
//       <p>我的名字是：{username}</p>
//     </div>
//   )
// }
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
      <ThemeContext.Provider value={
        {
          foreground: '#000000',
          background: '#ddd'
        }
      }>
      <Toolbar />
    </ThemeContext.Provider>

      <h2>===================================</h2>
      <p>hook Api 的使用</p>
      <p>count{count}</p>
      <Button onClick={() => setCount(count + 1)}>add</Button>
      <Input value={value} onChange={event => setValue(event.target.value)} placeholder='Basic usage' />
      <Child addClick={addClick} />
    </div>
  )
}

//
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
  addClick: PropTypes.func
}

const newComp = Comp => props => {
  return (
    <div className='abls'>
      <Comp {...props} omg='omg' />
    </div>
  )
}

@newComp
class HocComp extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <div>Child............</div>
      </React.Fragment>
    )
  }
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
        <HocComp a={1212} />
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
