import React, { useState, useEffect, useMemo } from 'react'
import { Button, Input, Divider } from 'antd'
import PropTypes from 'prop-types'

// templ
import UseStateTepl from './tmpl/Hook-useState'
import UseEffectTepl from './tmpl/Hook-useEffect'
import UseMemoTepl from './tmpl/Hook-useMemo'
import UseCallbackTepl from './tmpl/Hook-useCallback'
import UseContextTepl from './tmpl/Hook-useContext'

class HookPages extends React.Component {
  componentDidMount () {
    console.log('555')
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <h1 >Hook的使用：</h1>
          <p><em>必须函数组件中调用，或者自定义hook调用</em></p>
          <p><em>必须最外层调用</em></p>
          <Divider orientation='left'>useState</Divider>
          <UseStateTepl />
          <Divider orientation='left'>useEffect  和自定义Hook</Divider>
          <p><em>必须解决 hook useEffect 内存泄露问题 使用()=>{}</em></p>
          <p><em>自定义hook 必须以use开头</em></p>
          <p><em>useEffect 可以多次使用在一个 函数组件中</em></p>
          <p>
            声明周期相当于：
            [] 作为第二个参数有点类似于 componentDidMount 和 componentWillUnmount 的思维模式；

          </p>
          <UseEffectTepl/>

          <Divider orientation='left'>useMemo</Divider>
          <p><em>解决重复渲染的性能问题</em></p>
          <UseMemoTepl/>

          <Divider orientation='left'>useCallback</Divider>
          <UseCallbackTepl/>

          <Divider orientation='left'>useContext</Divider>
          <UseContextTepl/>

          <Divider orientation='left'>useEffect</Divider>

          {/* <FunctionComponent /> */}
        </div>
      </React.Fragment>
    )
  }
}

export default HookPages
