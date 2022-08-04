import './../src/assets/styles/main.scss'
import type { AppProps } from 'next/app'
import UserStore from './../store/UserStore'
import { createContext } from 'react'
import { AppContextInterface } from '../types/store'

export const Context = createContext<AppContextInterface>({
  user: new UserStore()
})

function MyApp({ Component, pageProps }: AppProps) {
  const dataStore: AppContextInterface = {
    user: new UserStore()
  }
  return (
    <Context.Provider value={dataStore}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
