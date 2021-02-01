import React from 'react'
import { Button } from 'antd'

class Field extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

    static propTypes = {
      // form: PropTypes.object
    }

    componentDidMount () {

    }

    render () {
      console.log(this.props)
      const { children } = this.props
      return (
            <React.Fragment>
                <div>
                    {children}
                </div>
            </React.Fragment>
      )
    }
}

export default Field
