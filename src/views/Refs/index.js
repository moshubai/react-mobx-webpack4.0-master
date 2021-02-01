import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import { history } from 'func'
import { Button, Input } from 'antd'
import './style/style.scss'
import PropTypes from 'prop-types'
// ==
class CustomTextInput extends React.Component {
  constructor (props) {
    super(props)

    this.textInput = null

    this.setTextInputRef = element => {
      console.log('e', element) // log
      this.textInput = element
    }

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus()
    }
  }

  componentDidMount () {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput()
  }

  render () {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type='text'
          ref={this.setTextInputRef}
        />
        <input
          type='button'
          value='Focus the text input'
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}
// ======

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

class App extends React.PureComponent {
  constructor (props) {
    super(props)
    this.tryRef = React.createRef()
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  componentDidMount () {
    console.log('555')
    console.log('ref', this.tryRef.current) // log
  }

  focusTextInput= () => {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus()
  }

  onRefsClick=() => {
    console.log('ppollkkkl') // log
  }

  render () {
    const ref = React.createRef()
    console.log('ref', ref) // log
    return (
      <React.Fragment>
        <h1 ref={this.tryRef}>Refs  学习</h1>
        <div className='mb-10'>
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
          <h3>Refs 转发</h3>
          <FancyButton btnClick={this.onRefsClick} ref={ref}>Click me!</FancyButton>
        </div>

        <div>
          <h3>回调 Refs</h3>
          <CustomTextInput/>
        </div>

      </React.Fragment>
    )
  }
}

const FancyButton = React.forwardRef((props, ref) => (
  <button onClick={props.btnClick} ref={ref} className='FancyButton'>
    {props.children}
  </button>
))

FancyButton.propTypes = {
  btnClick:PropTypes.func,
  children:PropTypes.string

}

export default App
