import React from 'react'
import '../style/home.scss'
import { Button } from 'antd'
import PropTypes from 'prop-types'

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
      <>
        <CustomTextInputTwo ref={this.textInputTwo} />
      </>

    )
  }
}

export default AutoFocusTextInput
