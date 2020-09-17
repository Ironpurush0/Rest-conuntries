import React from 'react'

const style = {width: 400, height: 50, borderRadius: 5, paddingLeft: 10}

function SearchBar({value, onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <input style={style} placeholder="search" onChange={onChange} value={value}/>
            <button type="submit" style={{display: 'none'}}>Submit</button>
        </form>
    )
}

export default SearchBar
