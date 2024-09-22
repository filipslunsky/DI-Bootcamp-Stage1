import React from "react"

const Hello = (props) => {
    console.log(props);
    
    return (
        <React.Fragment>
        <h2>{props.title}</h2>
        <h3>{props.sub}</h3>
        </React.Fragment>
    )
}

export default Hello