import { useContext } from "react";
import { ModeContext } from "../App";

const Header = () => {
    const {mode, setMode} = useContext(ModeContext);
    return (
        <>  
            <div className={mode === 'light' ? 'light' : 'dark'}>
                <h2>Header</h2>
                <h1>Current Theme: </h1>
                <button onClick={() => setMode(mode => {mode === 'light' ? setMode('dark') : setMode('light')})}>{mode}</button>
            </div>
        </>
    );
}
 
export default Header;