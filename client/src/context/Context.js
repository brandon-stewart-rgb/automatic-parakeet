import {createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';

const   INITIAL_STATE = {
    // if no user it is null
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
};

export const Context = createContext(INITIAL_STATE);


export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
        // store user in local storage
        useEffect(()=> {
localStorage.setItem('user', JSON.stringify(state.user))
        }, [state.user])
    return (
        <Context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}