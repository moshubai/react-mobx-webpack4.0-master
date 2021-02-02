import React, { useContext } from 'react'
import { history } from 'func'
import { Button, Input, Divider } from 'antd'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

// useContext 的理解
const themes = {
  light: {
    foreground: '#000000',
    background: '#ff0000'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext(themes.light)

function HookUseContext (props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton () {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  )
}

export default HookUseContext
