import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useHook = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if(response.ok){
                    const data = response.json()
                    setData(data)
                setLoading(false)
                }  
            } catch (error) {
             alert(error.message)   
            }
        }
        fetchData()
    }, [url])
    return {data, loading}
}

export default useHook