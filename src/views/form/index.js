import { Button } from 'antd'
import React from 'react'
import { createFrom } from './tepl/form'
import { history } from 'func'
import PropTypes from 'prop-types'

// * antd3 form实现原理

const rules = {
  userName: { required: true, message: '用户名不能为空！！！' },
  password: { required: true, message: '密码不能为空！！！' },
}

class InputCmp extends React.Component {
  componentDidMount () { }
  render () {
    return (
      <React.Fragment>
        <input {...this.props} />
      </React.Fragment>
    )
  }
}

@createFrom
class FormPage extends React.Component {
  static propTypes = {
    form: PropTypes.object
  }

  state = {
    userName: '',
    password: ''
  }

  componentDidMount () {
    // const { setFieldValue } = this.props.form
    // setFieldValue({
    //   userName: '用户名'
    // })
  }

  submit = () => {
    const { getFieldsValue, valiDataFieldVal } = this.props.form
    console.log(getFieldsValue())
    valiDataFieldVal((err, vals) => {
      if (err) {
        console.log('失败', err[0].message, vals) // log
      } else {
        console.log('成功') // log
      }
    })
  }

  goPage=() => {
    history.push('/form/form-antd4')
  }

  render () {
    console.log(this.props)

    const { getFieldDecorator } = this.props.form

    return (
      <React.Fragment>
        <div className='form'>

          <div className='form_warp'>
            <label>用户名</label>
            {
              getFieldDecorator('userName', { rule:rules.userName })(<InputCmp placeholder='用户名' />)
            }

          </div>
          <div className='form_warp'>
            <label>密码</label>
            {
              getFieldDecorator('password', { rule:rules.password })(<InputCmp placeholder='密码' />)
            }
          </div>
          <Button onClick={this.submit}>登录</Button>
          <h6>==========================================</h6>
          <Button onClick={this.goPage}>antd4 form</Button>
        </div>
      </React.Fragment>
    )
  }
}

export default FormPage
