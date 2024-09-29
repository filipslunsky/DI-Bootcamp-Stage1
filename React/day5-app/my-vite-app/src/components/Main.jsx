import { useContext } from "react";
import { ModeContext } from "../App";

const Main = () => {
    const {mode} = useContext(ModeContext);

    return (
        <>
            <div className={mode === 'light' ? 'light' : 'dark'}>
                <h2>Main</h2>
                <h1>Current Theme: </h1>
            </div>
        </>
    );
}
 
export default Main;