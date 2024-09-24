const SampleForm = () => {
    return (
        <>
            <h1>Sample form</h1>
            <form>
                <input type="text" placeholder="First Name" name="firstName" />
                <input type="text" placeholder="Last Name" name="lastName" />
                <input type="number" placeholder="Age" name="age" />
                <label>
                    <input type="radio" name="gender" value="male" />
                Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" />
                Female
                </label>
                <h2>Select your destination</h2>
                <select name="destionation">
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Thailand">Thailand</option>
                </select>
                <h2>Dietary restrictions:</h2>
                    <label>
                    <input type="checkbox" name="nutsFree" value="nutsFree" />
                Nuts free
                </label>
                <label>
                <input type="checkbox" name="lactoseFree" value="lactoseFree" />
                Lactose free
                </label>
                <label>
                <input type="checkbox" name="vegan" value="vegan" />
                Vegan
                </label>
                <input type="submit" />
            </form>
        </>
    );
}
 
export default SampleForm;