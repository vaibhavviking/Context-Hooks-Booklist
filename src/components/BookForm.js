import React , {useContext , useState} from 'react';
import { BookContext } from '../contexts/BookContext';


const NewBookForm = () => {
    const { dispatch} = useContext(BookContext);
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const add = (e) =>{
        e.preventDefault();
        dispatch({type : "ADD_BOOK",
        book : {
            title,
            author
        }});
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={(e)=> add(e)} >
            <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)} />
            <input type="text" required value={author} onChange={(e)=> setAuthor(e.target.value)} />
            <input type="submit" value="Add Book" />
        </form>
     );
}
 
export default NewBookForm;