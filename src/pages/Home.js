import React, {useState, useContext} from 'react'
import './Home.css'

import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Dropdown from '../components/Dropdown'
import FlagsList from '../components/FlagsList'
import SingleCard from '../components/SingleCard'

import useHook from '../hooks/useHook'
import {Container} from '@material-ui/core'

import {DataContext} from '../context/DataContext'

function Home() {
    // const [region, setRegion] = useState('Filter be region')
    // const [searchTerm, setSearchTerm] = useState('')

    // const baseUrl = 'https://restcountries.eu/rest/v2/all'

    // const handleChange = (event) => {
    //     setSearchTerm(event.target.value)
    // }
    const {data, loading} = useContext(DataContext)
    console.log(data)
    
    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <>
        <Container maxWidth="lg">
            <div className="form__container">
                <SearchBar />
                <Dropdown  />
            </div>
            <FlagsList data={data} />
            </Container>
        </>
    )
}

export default Home
