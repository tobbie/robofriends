import React from 'react'

const Scroll = (prop) => {
    return(
        <div style={{overflow: 'scroll', height:'800px', border:'3px solid black '}}>
            {prop.children}
        </div>
    )
}

export default Scroll