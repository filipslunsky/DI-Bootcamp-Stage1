import React from 'react';

class PostComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            message: '',
        };
    };

    getUserInput(e) {
        e.preventDefault();
        const userInput = e.target.userInput.value;
        this.postData(userInput);
    };

    async postData(userInput) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message: userInput})
        }
        try {
            const res = await fetch('http://127.0.0.1:3200/api/world', options);
            const data = await res.json();
            this.setState({message: `I received your POST request. This is what you sent me: ${data.message}`});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <h3>Post to Server</h3>
                <br />
                <form onSubmit={(e) => this.getUserInput(e)}>
                    <input type="text" name="userInput" placeholder='type message here'/>
                    <input type="Submit" />
                </form>
                <p>{this.state.message}</p>
            </>
        )
    };
};

export default PostComponent;