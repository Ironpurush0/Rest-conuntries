import React from 'react'

const style = {width: 400, height: 50, borderRadius: 5, paddingLeft: 10}

function SearchBar(props) {
    return (
        <form>
            <input style={style} placeholder="search" onChange={props.onChange} value={props.value}/>
        </form>
    )
}

export default SearchBar
