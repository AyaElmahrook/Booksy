import React, {createContext,  useState, useEffect} from "react"
import axios from 'axios';



export let booksContext=createContext(0);
// provie books context
export default function BooksContextProvider(props){
    const [books, setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    async function getBooks() {
        let { data } = await axios.get("http://gutendex.com/books/")
        setBooks(data.results);
        setLoading(false);
    }
    useEffect(() => {
        getBooks()
    }, [])
    return <booksContext.Provider value={{books,loading}}>
        {props.children}
    </booksContext.Provider>
}