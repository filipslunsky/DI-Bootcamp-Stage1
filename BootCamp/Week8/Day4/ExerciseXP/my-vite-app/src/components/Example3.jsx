import React from 'react';

class Example3 extends React.Component {
    constructor() {
        super();
        this.state = {
            experiences: [],
        }
    };

    getData(path) {
        fetch(path)
        .then(res => res.json())
        .then(data => {
            console.log(data.Experiences);
            this.setState({ experiences: data.Experiences });
        })
        .catch(error => {
            console.log(error);
        });
    };

    componentDidMount() {
        this.getData('/data2.json')
    };
     
    render() { 
        const { experiences } = this.state;
        return (
            <>
                {experiences.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.logo} />
                            <br />
                            <a href={item.url}>{item.companyName}</a>
                            <p><strong>{item.roles[0].title}</strong></p>
                            <p>{item.roles[0].startDate} {item.roles[0].location}</p>
                            <p>{item.roles[0].description}</p>
                        </div>
                    )
                })}
            </>
        );
    }
}
 
export default Example3;