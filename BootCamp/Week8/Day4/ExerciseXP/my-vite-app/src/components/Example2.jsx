import React from 'react';

class Example2 extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: []

        }
    };

    getData(path) {
        fetch(path)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                skills: data.Skills
            });
        
        })
        .catch(error => {
            console.log(error);
        });
    };

    componentDidMount() {
        this.getData('/data2.json')
    };
     
    render() { 
        const { skills } = this.state;
        return (
            <>
                {skills.map((item, index) => {
                    return (
                    <div key={index}>
                        <h2>{item.Area}</h2>
                        <ul>
                            {item.SkillSet.map((itm, ind) => {
                                return (
                                <li key={ind}>{itm.Name}</li>
                            )
                            })}
                        </ul>
                    </div>)
                })}
            </>
        );
    }
}
 
export default Example2;