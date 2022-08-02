import './../src/assets/styles/main.scss'
import type { AppProps } from 'next/app'
import UserStore from './../store/UserStore'
import { createContext } from 'react'
const dataStore = {
  user: new UserStore()
}
export const Context = createContext(dataStore)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider value={dataStore}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
