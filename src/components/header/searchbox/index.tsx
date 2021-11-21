import React from 'react'
import { SearchBoxStyle } from './styles';
const SearchBox = (props: any) => {
    return (
        <SearchBoxStyle>
                <input 
                    type="text" 
                    placeholder={props.placeholder}
                    onChange={props.handleChange}
                />
        </SearchBoxStyle>
    )
}

export default SearchBox
