import React from 'react'
import mergeRoute from 'components/merge-routes'
const ExamplePage = React.lazy(() => import('@/views/example'))

export default mergeRoute([
  {
    path: '/example',
    tmpl: ExamplePage,
    children: [
      {

      }
    ]
  }
])
