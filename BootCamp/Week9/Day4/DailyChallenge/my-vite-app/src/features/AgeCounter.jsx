import reactLogo from '../assets/react.svg';
import { useSelector, useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from './ageSlice';



const AgeCounter = (props) => {
    const dispatch = useDispatch();
    const age = useSelector(state => state.ageReducer.age);
    const loading = useSelector(state => state.ageReducer.loading);

    const addAge = (e) => {
        e.preventDefault();
        dispatch(ageUpAsync());
    };

    const subtractAge = (e) => {
        e.preventDefault();
        dispatch(ageDownAsync());
    };

    return (
        <>
        <form>
            <button onClick={(e) => {addAge(e)}}> Age Up </button>
            <button onClick={(e) => {subtractAge(e)}}> Age Down </button>
         </form>
         <div className="result">
         {loading ? <img src={reactLogo} className="loading" /> : <h2> {age} </h2> }
         </div>
        </>
    );
}
 
export default AgeCounter;