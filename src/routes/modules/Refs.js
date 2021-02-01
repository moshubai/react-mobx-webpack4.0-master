import React from 'react'
import mergeRoute from 'components/merge-routes'
const RefsPage = React.lazy(() => import('@/views/Refs'))

export default mergeRoute([
  {
    path: '/Refs',
    tmpl: RefsPage,
    children: [
      {

      }
    ]
  }
])
