import Layout from '../components/Layout'
import client from "../lib/sanity/client"
import useAuth from '../hooks/useAuth'
import { useState, useEffect, createContext } from "react"
import MapList from '../components/map/List'

export const AppContext = createContext()

export default function Dashboard() {
  const { user, loading } = useAuth()
  const [mapList, setMapList] = useState([])
    
  const fetchMaps = async () => {
    let fetchedMaps;
    if (user && !loading) {
      fetchedMaps = await client.fetch(
        `*[ _type == 'map' && user == $user] | 
        {
          _id, 
          title, 
          start, 
          end, 
          user,
          "goals": *[ _type == "goal" && map._ref == ^._id ] {
            title,
            celebration,
            tactic,
            benchmark,
            isCompleted,
            completedOn
          }
        }`
        ,{ user: user.email}
        )
      setMapList(fetchedMaps)
    }
  }

  useEffect(() => {fetchMaps()}, [loading, user])
  
  const handleMapDelete = async (selectedMap) => {
    await fetch("/api/map", {
      method: "DELETE",
      body: selectedMap._id,
    })
    await fetchMaps()
  }

  return (
    <AppContext.Provider value={{ fetchMaps, handleMapDelete }}>
        <Layout home>
          <div className="flex">
            <MapList user={user} mapList={mapList}/>
          </div>
        </Layout>
    </AppContext.Provider>
  )
}
