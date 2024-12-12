import React from 'react';
import './index.css'; 

function Typography(props){
    const { size = "md", children } = props;
    const className = `typography typography--${size}`;

    
    return (
        
        <p className={className}>
            {children}
        </p>
    );
}

export default Typography;
