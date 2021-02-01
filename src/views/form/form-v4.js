import { Button } from 'antd'
import React from 'react'
import Input from './rc-field-form/input'
import PropTypes from 'prop-types'

import Form, { Field } from './rc-field-form/index'

// * antd4 form实现原理
// 创建数据仓库(银行) 统一管理state数据，提供get set函数（能查询余额、存钱取钱），
// 某个组件的state需要改变，则只更新对应组件，而不是更新这个Form

class FormVfourPage extends React.Component {
  // formRef = React.createRef
  static propTypes = {
    // form: PropTypes.object
  }

  state = {
    userName: '',
    password: ''
  }

  componentDidMount () {
    // console.log('form', this.formRef.current)
    // this.formRef.current.setFieldsValue({ username: 'default' })
  }

  submit = () => {

  }

  onFinish = val => {
    console.log('onFinish', val) // sy-log
  };

  // 表单校验失败执行
  onFinishFailed = val => {
    console.log('onFinishFailed', val) // sy-log
  };

  render () {
    console.log(this.props)

    return (
      <React.Fragment>
        <div className='form'>
          <h2>form 的实现</h2>
          <Form
            ref={this.formRef}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Field>
              <Input placeholder='用户名' />
            </Field>
            <Field>
              <Input placeholder='密码' />
            </Field>
            <Button >登录</Button>
          </Form>

        </div>
      </React.Fragment>
    )
  }
}

export default FormVfourPage
