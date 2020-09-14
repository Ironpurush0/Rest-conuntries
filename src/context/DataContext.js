import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://restcountries.eu/rest/v2/all')
                setCurrentData(res.data)
                // console.log(res.data)
            } catch (error) {
                alert(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <DataContext.Provider value={{currentData}}>
            {children}
        </DataContext.Provider>
    )
}

