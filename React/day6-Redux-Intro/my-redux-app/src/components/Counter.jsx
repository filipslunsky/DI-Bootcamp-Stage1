import { useDispatch, useSelector, connect } from "react-redux";
import { plus, minus } from '../redux/actions';

const Counter = () => {
    const count = useSelector(state => state.counterReducer.count)
    return (
        <>
            <h2>Redux Counter</h2>
        </>
    );
}
 
export default Counter;