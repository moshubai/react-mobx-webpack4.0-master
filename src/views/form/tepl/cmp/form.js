import React from 'react'

export function createFrom (Cmp) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {}
      this.options = {}
    }

    getFieldsValue = () => {
      return { ...this.state }
    }

    getFieldValue = (name) => {
      return this.state[name]
    }

    setFieldValue = (newState) => {
      this.setState(newState)
    }

    valiDataFieldVal=(callback) => {
      const err = []
      for (const fieldName in this.options) {
        console.log('fieldName', this.options[fieldName], this.state) // log
        if (this.state[fieldName] === undefined) {
          err.push(this.options[fieldName].rule)
        }
      }

      if (err.length === 0) {
        callback(null, { ...this.state })
      } else {
        callback(err, { ...this.state })
      }
    }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    }

    getFieldDecorator = (fieldName, options) => InputCmp => {
      this.options[fieldName] = options
      return React.cloneElement(InputCmp, {
        name: fieldName,
        value: this.state[fieldName] || '',
        onChange: this.handleChange
      })
    }

    getForm = () => {
      return {
        getFieldsValue: this.getFieldsValue,
        getFieldValue: this.getFieldValue,
        setFieldValue: this.setFieldValue,
        valiDataFieldVal: this.valiDataFieldVal,
        getFieldDecorator: this.getFieldDecorator
      }
    }

    render () {
      const form = this.getForm()
      return <Cmp {...this.props} form={form}></Cmp>
    }
  }
}
