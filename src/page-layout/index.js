import React from 'react'
import './page-layout.scss'
import PropTypes from 'prop-types'
import './page-layout'
import { history } from 'func'
import { Button } from 'antd'
class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {

    pageList: [
      {
        name: '首页',
        path: '/',
        active: true
      }, {
        name: 'context传参',
        path: '/context',
        active: false
      }, {
        name: '例子',
        path: '/example',
        active: false
      }, {
        name: '高阶组件',
        path: '/height-comp',
        active: false
      }, {
        name: '监听事件',
        path: '/ListenersEvent',
        active: false
      }, {
        name: 'mobx-page',
        path: '/mobx-page',
        active: false
      }, {
        name: 'hook学习',
        path: '/hook',
        active: false
      },{
        name: '实现antd-v4的form',
        path: '/form',
        active: false
      },
    ]
  }

  componentDidMount () {
    history.listen(route => {
      const { pathname } = route
      // console.log(route, pathname)
      const { pageList } = this.state
      pageList.map(item => {
        item.active = false
        if (pathname === item.path) {
          item.active = true
        }
        return item
      })
      this.setState({
        pageList
      })
    })
  }

  goPage = (v) => {
    history.push(v.path)
  }

  render () {
    const { children } = this.props
    const { pageList } = this.state
    return (
      <React.Fragment>
        <div className='page-layout'>
          <div className='page_path'>
            {pageList.map((v, i) => {
              return (
                <Button type={`${v.active ? 'primary' : ''}`} onClick={() => this.goPage(v)} key={i}>{v.name}</Button>
              )
            })}
          </div>
          <div>{children}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
