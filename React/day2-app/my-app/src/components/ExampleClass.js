import React from 'react';

class ExampleClass extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            text: ''
        };
        console.log('constructor');
    }

    getUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            this.setState({ users: data });
        } catch (error) {
            console.log(error);
        }
    };

    searchUsers = (input) => {
        console.log(input);
        this.state.users.filter(item => item.name.includes(input));
    };

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ text: e.target.value });
    };

    componentDidMount = () => {
        console.log('componentDidMount');
        this.getUsers();
    };

    componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate', prevProps, prevState);
    };

    render() {
        console.log('render');

        // Properly filter the users and return the result
        const filtered = this.state.users.filter((item) => {
            return item.name.toLowerCase().includes(this.state.text.toLowerCase());
        });

        return (
            <>
                <h2>Example of Class Component {this.props.test}</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    onInput={(e) => this.handleChange(e)}
                />
                {filtered.length > 0 ? (
                    filtered.map((item) => {
                        return <div key={item.id}>{item.name}</div>;
                    })
                ) : (
                    <p>No users found.</p>
                )}
            </>
        );
    }
}

export default ExampleClass;
