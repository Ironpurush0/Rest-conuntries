import React from 'react'
import {TextField} from '@material-ui/core'
import {Card} from '../components/Button'

const style = {width: '100%', height: '100%', borderRadius: 5}

function SearchBar({value, onChange, onSubmit}) {
    return (
        <Card variant="normal">
            <form onSubmit={onSubmit}>
                <TextField style={style} variant="outlined" placeholder="search" onChange={onChange} value={value} />
                <button type="submit" style={{display: 'none'}}>Submit</button>
            </form>
            </Card>    
    )
}

export default SearchBar
