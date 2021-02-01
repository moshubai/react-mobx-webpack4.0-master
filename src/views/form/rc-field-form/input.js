import React from 'react'
import { Button } from 'antd'

const Input = (props) => {
  return (
        <input {...props} />
  )
}

class CustomizeInput extends React.Component {
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
    //   const { value, ...otherProps } = this.props
      const { value, ...otherProps } = this.props
      return (
            <React.Fragment>
                <div style={{ padding: 10 }}>
                    <Input style={{ outline: 'none' }} value={value || ''} {...otherProps} />
                </div>
            </React.Fragment>
      )
    }
}

export default CustomizeInput
