export const INCREMENT = "plus";
export const DECREMENT = "minus";

export const plus = () => {
    return {
        type: INCREMENT,
    };
};

export const minus = () => {
    return {
        type: DECREMENT,
    };
};