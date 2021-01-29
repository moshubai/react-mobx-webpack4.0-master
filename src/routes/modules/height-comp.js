import React from 'react'
import mergeRoute from 'components/merge-routes'
const HeightCompPage = React.lazy(() => import('@/views/height-comp'))

export default mergeRoute([
  {
    path: '/height-comp',
    tmpl: HeightCompPage,
    children: [
      {

      }
    ]
  }
])
