import React from 'react';
import SearchContainer from './SearchContainer';

const SearchIndex = (props) => {
        const {initName} = props.location.state
        return(
                <SearchContainer initName={initName} />
        );
}

export default SearchIndex;