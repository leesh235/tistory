import React from 'react';
import DetailContainer from './DetailContainer';

const DetailIndex = (props) => {
        const {history, location} = props;
        // console.log(location);
        return(
                <DetailContainer history={history} location={location} />
        );
}

export default DetailIndex;