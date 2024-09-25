import React from 'react';

class GetComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            message: '',
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:3200/api/hello');
            const data = await res.json();
            console.log(data.message);
            this.setState({message: data.message});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <h3>{this.state.message}</h3>
            </>
        )
    };
};

export default GetComponent;