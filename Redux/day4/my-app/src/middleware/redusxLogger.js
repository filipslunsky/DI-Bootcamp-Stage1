const loggerMiddleware = store => next => action => {
    console.log('Prev state:', store.getState());
    console.log('Action:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
};

export default loggerMiddleware;