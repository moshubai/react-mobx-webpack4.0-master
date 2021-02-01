import React from 'react'
import mergeRoute from 'components/merge-routes'
const FormPage = React.lazy(() => import('@/views/form'))
const FormVfourPage = React.lazy(() => import('@/views/form/form-v4.js'))

export default mergeRoute([
  {
    path: '/form',
    tmpl: FormPage,
    children: [
      {
        path: '/form-antd4',
        tmpl: FormVfourPage
      }
    ]
  }
])
