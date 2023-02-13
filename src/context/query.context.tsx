import { createContext, ReactNode, useState } from 'react'

const QueryContext = createContext({})

interface Props {
  children: ReactNode
}

export function QueryContextProvider({ children }: Props) {
  const [query, setQuery] = useState<string>('')
  return <QueryContext.Provider value={{ query, setQuery }}>{children}</QueryContext.Provider>
}

export default QueryContext
