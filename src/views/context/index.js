import React, { useState, useContext } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Button, Tag, Input, Table } from 'antd'
import { AppContext, OtherContext } from './tmpl/context'
import ChildClass from './tmpl/ChildClass'
import { ChildOne } from './tmpl/ChildOne'
import ConsumerPage from './tmpl/consumer'
import PropTypes from 'prop-types'

// * Context 传参
// 1、创建一个 context 对象
// 2、创建 Provider ，传递value
// 3、子组件消费value ，有三种途径 ：ContextType，useContext，Consumer
// * 区别
// ContextType 只能用在类组件，只能订阅单一的Context来源数据。
// useContext 只能用在函数组件或者自定义hook中

class ContextPage extends React.Component {
  static propTypes = {
    // children: PropTypes.node
  }

  state = {
    infoObj: {
      username: '墨书白',
      title: '前端工程师'
    },
    consumerObj: '测试类组件，接收多个context,2222'
  }

  goChange = () => {
    this.setState({ infoObj: { username: '墨书白', title: '男-前端工程师' } })
  }

  render () {
    const { infoObj, consumerObj } = this.state
    return (
      <React.Fragment>
        <AppContext.Provider value={infoObj}>
          <ChildOne></ChildOne>
          <ChildClass></ChildClass>
          <OtherContext.Provider value={consumerObj}>
            <ConsumerPage />
          </OtherContext.Provider>
        </AppContext.Provider>
        <Button type='primary' onClick={() => this.goChange()} >点击事件，修改context值</Button>
      </React.Fragment>
    )
  }
}

export default ContextPage
