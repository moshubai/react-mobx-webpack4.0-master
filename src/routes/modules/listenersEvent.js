import React from 'react'
import mergeRoute from 'components/merge-routes'
const ListenersEventPage = React.lazy(() => import('@/views/listenersEvent'))

export default mergeRoute([
  {
    path: '/ListenersEvent',
    tmpl: ListenersEventPage,
    children: [
      {

      }
    ]
  }
])
