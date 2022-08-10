import Layout from '../components/Layout'
import Content from '../components/Content'
import { useState, useEffect, createContext } from "react"

export const AppContext = createContext()

export default function Dashboard() {

  return (
    <AppContext.Provider>
        <Layout home>
            <Content/>
        </Layout>
    </AppContext.Provider>
  )
}
