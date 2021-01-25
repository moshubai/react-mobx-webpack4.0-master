import mergeRoute from 'components/merge-routes'
import {
  ExamplePage,
  ExampleHome,
  Jinzhi,
  Xiaozhu
} from 'pages/example'

export default mergeRoute([
  {
    path: '/example',
    tmpl: ExamplePage,
    children: [
      // {
      //   path: '/test',
      //   tmpl: ExampleTest,
      //   children: [
      //     {
      //       path: '/jinzhi',
      //       tmpl: Jinzhi,
      //     }
      //   ]
      // }
    ]
  },
  // {
  //   path: '/xiaozhu',
  //   tmpl: Xiaozhu
  // },
])
