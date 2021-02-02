import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import './style/home.scss'
import { history } from 'func'
import { Button, Input, Divider } from 'antd'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import AutoFocusTextInput from './tmpl/AutoFocusTextInput'
// useContext 的理解

@inject('example')
@observer

class HomePage extends React.PureComponent {
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
    console.log('tryRef', this.tryRef.current) // log
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
        <h1 ref={this.tryRef}>Refs的使用：</h1>
        <Divider orientation='left'>方式1：React.createRef()</Divider>
        <div>
          <p><em>创建一个 ref 来存储 textInput 的 DOM 元素</em></p>
          <p><em>直接使用原生 API 使 text 输入框获得焦点</em></p>
          <p><em>注意：我们通过 "current" 来访问 DOM 节点</em></p>
          <input type='text' ref={this.textInput} />
          <Button type='primary' onClick={this.focusTextInput} >利用ref获取焦点</Button>
          <h2>例子：</h2>
          <AutoFocusTextInput />
        </div>

        <Divider orientation='left'>方式2：React.createRef()</Divider>

        <h2>

        </h2>
        <div>

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

export default HomePage
