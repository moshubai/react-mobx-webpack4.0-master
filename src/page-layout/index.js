import React from 'react'
import './page-layout.scss'
import PropTypes from 'prop-types'
import './page-layout'
import { history } from 'func'
class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  state={
    pageList:[
      {
        name:'首页',
        path:'/home'
      }, {
        name:'首页',
        path:'/home'
      }, {
        name:'首页',
        path:'/home'
      }, {
        name:'首页',
        path:'/home'
      }, {
        name:'首页',
        path:'/home'
      }
    ]
  }

  goPage=(v) => {
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
                <span onClick={() => this.goPage(v)} key={i}>{v.name}</span>
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
