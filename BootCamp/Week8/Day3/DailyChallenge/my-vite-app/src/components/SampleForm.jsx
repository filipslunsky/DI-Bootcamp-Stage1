import { useState } from 'react';
import './SampleForm.css';

const SampleForm = () => {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        nuts: 'No',
        lactose: 'No',
        vegan: 'No'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(inputs).toString();
        window.location.href = `/?${params}`;
    };

    const handleInputs = (e) => {
        const { name, value, type, checked } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: type === 'checkbox' ? (checked ? 'Yes' : 'No') : value,
          }));
    };

    return (
        <div className='main'>
            <h1>Sample form</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <input onChange={(e) => {handleInputs(e)}} type="text" placeholder="First Name" name="firstName" />
                <br />
                <input onChange={(e) => {handleInputs(e)}} type="text" placeholder="Last Name" name="lastName" />
                <br />
                <input onChange={(e) => {handleInputs(e)}} type="number" placeholder="Age" name="age" />
                <br />
                <label>
                    <input onChange={(e) => {handleInputs(e)}} type="radio" name="gender" value="male" />
                Male
                </label>
                <br />
                <label>
                    <input onChange={(e) => {handleInputs(e)}} type="radio" name="gender" value="female" />
                Female
                </label>
                <h3>Select your destination</h3>
                <select onChange={(e) => {handleInputs(e)}} name="destination">
                    <option selected disabled>Please Choose a Destination</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Thailand">Thailand</option>
                </select>
                <h3>Dietary restrictions:</h3>
                    <label>
                    <input onChange={(e) => {handleInputs(e)}} type="checkbox" name="nuts" value="nutsFree" />
                Nuts free
                </label>
                <br />
                <label>
                <input onChange={(e) => {handleInputs(e)}} type="checkbox" name="lactose" value="lactoseFree" />
                Lactose free
                </label>
                <br />
                <label>
                <input onChange={(e) => {handleInputs(e)}} type="checkbox" name="vegan" value="vegan" />
                Vegan
                </label>
                <br />
                <input type="submit" className='button' />
            </form>
            <hr />
            <div className="answers">
                <h2>Entered information:</h2>
                <p>
                    Your name: {inputs.firstName} {inputs.lastName}
                    <br />
                    Your age: {inputs.age}
                    <br />
                    Your gender: {inputs.gender}
                    <br />
                    Your destination: {inputs.destination}
                    <br />
                    Your dietary restrictions:
                    <br />
                     **Nuts free : {inputs.nuts}
                     <br />
                     **Lactose free : {inputs.lactose}
                     <br />
                     **Vegan meal : {inputs.vegan}
                </p>
            </div>
        </div>
    );
}
 
export default SampleForm;