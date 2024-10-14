import { useReducer, ReactElement } from "react";

type InitialStateT = {
    count: number;
};

enum ActionEnum {
    INCREMENT,
    DECREMENT,
};

type ReducerActionT = {
    type: ActionEnum;
    payload?: number;
};

const initialState: InitialStateT = {
    count: 0
};

const reducer = (state: InitialStateT, action: ReducerActionT): InitialStateT => {
    switch (action.type) {
        case ActionEnum.INCREMENT:
            if (action.payload) {
                return {...state, count: state.count + action.payload};
            }
            return state;
        case ActionEnum.DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};

const CounterReducer = (): ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const increment = (): void => dispatch({type: ActionEnum.INCREMENT, payload: 5});
    const decrement = (): void => dispatch({type: ActionEnum.DECREMENT});
    
    return (
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </>
    )
};

export default CounterReducer;