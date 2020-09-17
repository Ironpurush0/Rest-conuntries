import React, {useState, useContext} from 'react'
import './Home.css'

import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Dropdown from '../components/Dropdown'
import FlagsList from '../components/FlagsList'


import {Container} from '@material-ui/core'

import {DataContext} from '../context/DataContext'

function Home() {
    // const [region, setRegion] = useState('Filter be region')
    const {data, loading} = useContext(DataContext)
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    //This will check if there is a searchTerm, if it is then it will render single country card otherwise it will render all the cards
    const filteredData = !searchTerm ? data : data.filter(searchData => searchData.name === searchTerm)

    return (
        <>
        <Container maxWidth="lg">
            <div className="form__container">
                <SearchBar value={searchTerm} onChange={handleChange} onSubmit={handleSubmit} />
                <Dropdown  />
            </div>
            {loading && <h1>Loading...</h1>}
            <FlagsList data={filteredData} />
            </Container>
        </>
    )
}

export default Home
