import React, { useState } from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'

const HookFountion = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>count:{count}</p>
      <Button onClick={() => setCount(count + 1)}>点击增加</Button>
    </div>
  )
}

export default HookFountion
