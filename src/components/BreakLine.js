import React from 'react';

function BreakLine(props){
    return(
        <hr 
            style={{
                color: props.color,
                borderTop: 'double'
            }}
            className='k-breakLine'
        />
    );
}

export default BreakLine;