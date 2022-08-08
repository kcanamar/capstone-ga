import Layout from '../components/Layout'
import DashboardContent from '../components/dashBoard'
import { useState, useEffect, createContext } from "react"

export const AppContext = createContext()

export default function Dashboard() {

  return (
    <AppContext.Provider>
        <Layout home>
            <DashboardContent/>
        </Layout>
    </AppContext.Provider>
  )
}
