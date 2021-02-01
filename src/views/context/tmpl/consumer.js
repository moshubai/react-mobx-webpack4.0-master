import React from 'react'
import { AppContext, OtherContext } from './context'

class ConsumerPage extends React.Component {
  componentDidMount () { }
  render () {
    // const {} = this.props
    return (
      <React.Fragment>
        <div>
          <h2>类组件，接收多个context</h2>
          <AppContext.Consumer>
            {
              infoObj => {
                return (
                  <div>
                    <p>1、{infoObj.username}</p>
                    <p>2、{infoObj.title}</p>
                  </div>
                )
              }
            }
          </AppContext.Consumer>
          <OtherContext.Consumer>
            {
              consumerObj => {
                return (
                  <div>
                    <p>{consumerObj}</p>
                  </div>
                )
              }
            }
          </OtherContext.Consumer>
                    consumer
                </div>
      </React.Fragment>
    )
  }
}

export default ConsumerPage
