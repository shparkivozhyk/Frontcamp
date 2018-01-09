/*
    Observer pattern; 
    Subject realization - list of listeners, subscribing for listeners,
    sending notifications to listeners
*/

export const createStore = (reducer) => {
    let state = {};
    let listeners = [];
    const getState = () => state;

    const dispatch = (action) => {
        if (typeof action === 'function') {
            return action(dispatch, state);
        }
        state = reducer(state, action);
        listeners.forEach(listener => listener());    
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l != listener);
        }
    }
    return {getState, dispatch, subscribe};
}