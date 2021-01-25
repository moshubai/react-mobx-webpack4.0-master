
import mergeRoute from 'components/merge-routes'
import {
  FormPage
} from 'pages/form'

export default mergeRoute([
  {
    path: '/form',
    tmpl: FormPage,
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
