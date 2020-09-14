import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useHook = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url)
                // console.log(response.data)
                setData(response.data)
                setLoading(false)  
            } catch (error) {
             alert(error.message)   
            }
        }
        fetchData()
    }, [url])
    return {data, loading}
}

export default useHook