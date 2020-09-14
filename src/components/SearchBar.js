import React from 'react'

const style = {width: 400, height: 50, borderRadius: 5, paddingLeft: 10}

function SearchBar({value, onChange}) {
    return (
        <form>
            <input style={style} placeholder="search" onChange={onChange} value={value}/>
        </form>
    )
}

export default SearchBar
