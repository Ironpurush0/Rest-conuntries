import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            setData(response.data)
            setLoading(false)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <DataContext.Provider value={{data, loading}} >
            {children}
        </DataContext.Provider>
    )
}

