import React from 'react'
import mergeRoute from 'components/merge-routes'
const HookPage = React.lazy(() => import('@/views/hook'))

export default mergeRoute([
  {
    path: '/hook',
    tmpl: HookPage,
    children: [
      {

      }
    ]
  }
])
