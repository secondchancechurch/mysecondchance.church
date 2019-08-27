import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

/* First we will make a new context */
const StoreContext = React.createContext()

const GET_STORE = gql`{
  churchOnline {
    isLive
    nextLive
  }
}
`

/* Then create a provider Component */
const StoreProvider = (props) => {
  const [isLive, nextLive] = useState(false)

  const { loading, error, data } = useQuery(GET_STORE, {
    pollInterval: 60000,
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <StoreContext.Provider
      value={{
        isLive: data.churchOnline.isLive,
        nextLive: data.churchOnline.nextLive
      }}
    >
      {props.children}
    </StoreContext.Provider>
  )
}
// class StoreProvider extends Component {
//   state = {
//     isLive: true,
//     nextLive: null
//   }
//
//   render () {
//     return (
//         <Query
//             query={gql`{
//           churchOnline {
//             isLive
//             nextLive
//           }
//         }`}
//             pollInterval={60000}
//         >
//           {({ loading, error, data }) => {
//             if (loading) return null
//             if (error) return null
//
//             return (
//                 <StoreContext.Provider
//                     value={{
//                       isLive: data.churchOnline.isLive,
//                       nextLive: data.churchOnline.nextLive
//                     }}
//                 >
//                   {this.props.children}
//                 </StoreContext.Provider>
//             )
//           }}
//
//         </Query>
//     )
//   }
// }

/* then make a consumer which will surface it */
const StoreConsumer = StoreContext.Consumer

export { StoreProvider, StoreConsumer }