import React , { createContext , useReducer, useEffect } from 'react';
import {v4 as uuid4} from 'uuid';
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[],()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [] ;
    });
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books));
    },[books]);
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;