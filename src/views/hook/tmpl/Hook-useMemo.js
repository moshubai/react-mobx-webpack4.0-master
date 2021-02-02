import React, { useState, useEffect, useMemo } from 'react'
import { Button, Input } from 'antd'
import PropTypes from 'prop-types'

const HookUseMemo = () => {
  const [titleCount, setTitleCount] = useState(0)
  useEffect(() => {
    document.title = `点击了${titleCount}次`
  }, [titleCount])

  const expensive = useMemo(() => {
    console.log('expensive')
    let num = 0
    for (let i = 0; i < titleCount; i++) {
      num += i
    }

    return num
  }, [titleCount])

  const [value, setValue] = useState('')

  return (
    <div>
      <p><Button onClick={() => setTitleCount(titleCount + 1)}>点击事件</Button></p>
      <p>expensive:{expensive}</p>
      <Input value={value} onChange={event => setValue(event.target.value)} placeholder='Basic usage' />
    </div>
  )
}

export default HookUseMemo
