import { useContext } from "react";
import { DisplayContext } from "./Display";

const ShowInput = () => {
    const {input} = useContext(DisplayContext);
    return (
        <>
            <h2>Show input</h2>
            <p>{input}</p>
        </>
    );
}
 
export default ShowInput;