import React from 'react';

class Example1 extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
    };

    getData(path) {
        fetch(path)
        .then(res => res.json())
        .then(data => {
            this.setState({ items: data.SocialMedias });
        })
        .catch(error => {
            console.log(error);
        });
    };

    componentDidMount() {
        this.getData('/data2.json')
    };
     
    render() { 
        const { items } = this.state;
        return (
            <>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        );
                    })}
                </ul>
            </>
        );
    }
}
 
export default Example1;