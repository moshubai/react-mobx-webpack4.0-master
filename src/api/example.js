import { ajax } from './'
class Xhr {
  getChainDate = (postData = {}) => (
    ajax.get('ptm/device/listPerson', { params: postData })
  )
}

export default new Xhr()
