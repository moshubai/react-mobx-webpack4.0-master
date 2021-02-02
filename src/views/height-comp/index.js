import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Divider } from 'antd'
import './style/index.scss'

const newComp = Comp => props => {
  return (
    <div className='abls'>
      <Comp {...props} omg='omg' />
    </div>
  )
}

@newComp
class HocComp extends React.Component {
  static propTypes = {
    a: PropTypes.string,
    omg: PropTypes.string,
  }

  render () {
    console.log(this.props)
    const { a, omg } = this.props
    return (
      <React.Fragment>
        <div>Child.......被包裹后获取信息
            a:{a},omg:{omg}
        </div>
      </React.Fragment>
    )
  }
}
@inject('example')
@observer
class HocComponent extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }

  componentDidMount () {
    const { getDate } = this.props.example
    getDate().then((res) => {
      console.log(res)
    })
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <Divider orientation='left'>高阶组件(hoc)实践</Divider>
          <HocComp a={1212} />
        </div>
      </React.Fragment>
    )
  }
}
export default HocComponent
