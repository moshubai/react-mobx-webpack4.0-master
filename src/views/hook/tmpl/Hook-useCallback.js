import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import { history } from 'func'
import { Button, Input } from 'antd'
import PropTypes from 'prop-types'

const HookUseCallback = () => {
  const [count, setCount] = useState(0)

  const addClick = useCallback(() => {
    console.log('addClick')
    let num = 0
    for (let i = 0; i < count; i++) {
      num += i
    }
    return num
  }, [count])

  const [value, setValue] = useState('')

  return (
    <div>
      <p>count{count}</p>
      <Button onClick={() => setCount(count + 1)}>add</Button>
      <Input value={value} onChange={event => setValue(event.target.value)} placeholder='Basic usage' />
      <Child addClick={addClick} />
    </div>
  )
}

//
class Child extends React.PureComponent {
  render () {
    const { addClick } = this.props
    console.log('Child    render')
    return (
      <React.Fragment>
        <h3>Child</h3>
        <Button onClick={() => console.log(addClick())}>点击按钮啊</Button>
      </React.Fragment>
    )
  }
}
Child.propTypes = {
  addClick: PropTypes.func
}

export default HookUseCallback
