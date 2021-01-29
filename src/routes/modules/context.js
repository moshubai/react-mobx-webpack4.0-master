import React from 'react'
import mergeRoute from 'components/merge-routes'
const ContextPage = React.lazy(() => import('@/views/context'))

export default mergeRoute([
  {
    path: '/context',
    tmpl: ContextPage,
    children: [
      {

      }
    ]
  }
])
