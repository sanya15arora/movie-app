import React from 'react';
import "./MovieStyle.css"

const MoviesHeading = ({heading}) => {
    return <div style={{padding: '0 15px'}}>
        <h1>{heading}</h1>
    </div>;
};

export default MoviesHeading;
