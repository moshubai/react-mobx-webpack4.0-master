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

class CustomTextInputTwo extends React.Component {
  constructor (props) {
    super(props)
    // 创建一个 ref 来存储 textInputTwo 的 DOM 元素
    this.textInputTwo = React.createRef()
    this.focusTextInputTwo = this.focusTextInputTwo.bind(this)
  }

  focusTextInputTwo () {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInputTwo.current.focus()
  }

  render () {
    // console.log('this.props', this.props) // log
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInputTwo` 上
    return (
      <div>
        <input
          type='text'
          ref={this.textInputTwo} />
        <Button onClick={this.focusTextInputTwo}>Focus the text input</Button>

      </div>
    )
  }
}

class AutoFocusTextInput extends React.Component {
  constructor (props) {
    super(props)
    this.textInputTwo = React.createRef()
  }

  componentDidMount () {
    // this.textInputTwo.current.focusTextInputTwo()
  }

  render () {
    return (
      <CustomTextInputTwo ref={this.textInputTwo} />
    )
  }
}

@inject('example')
@observer

class App extends React.PureComponent {
  constructor (props) {
    super(props)
    this.tryRef = React.createRef()
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  static propTypes = {
    example: PropTypes.object
  }

  componentDidMount () {
    console.log('555')
    const tryRef = React.createRef()
    console.log('ref', tryRef.current, this.tryRef.current) // log
  }

  focusTextInput () {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus()
  }

  render () {
    const { todos } = this.props.example
    return (
      <React.Fragment>
        <h1 ref={this.tryRef}>Refs</h1>
        <div>
          <input
            type='text'
            ref={this.textInput} />
          <input
            type='button'
            value='Focus the text input'
            onClick={this.focusTextInput}
          />
        </div>
        <h2>
          <AutoFocusTextInput />
        </h2>
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
