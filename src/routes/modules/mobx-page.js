import React from 'react'
import mergeRoute from 'components/merge-routes'
const MobxPagePage = React.lazy(() => import('@/views/mobx-page'))

export default mergeRoute([
  {
    path: '/mobx-page',
    tmpl: MobxPagePage,
    children: [
      {

      }
    ]
  }
])
