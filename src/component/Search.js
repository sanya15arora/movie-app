import React from 'react';

const Search = (props) => {
    return (


        <div class="search" >

            <input  className="text-field"placeholder='search movie here...' type='search'
                    value={props.searchKeyword}
                    onChange={(e) => props.setSearchKeyword(e.target.value)} />
        </div>

    )
};

export default Search;
