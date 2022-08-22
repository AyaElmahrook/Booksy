import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function ViewBook() {
    let routeParam= useParams();

    const [book, setBook] = useState({});
    const [loading,setLoading] = useState(true);
    async function getBook(bookId) {
        let { data } = await axios.get("http://gutendex.com/books/"+bookId)
        setBook(data);
        setLoading(false);
    }

    useEffect(() => {
        getBook(routeParam.bookId);
    }, [])
    
    return (
        <>
        {loading?<><h1 className='text-2xl font-bold tracking-tight text-gray-900'>Loading book details...</h1></>:<>
        <div className='bg-indigo py-5'>{book.id}</div>
        <div className='bg-indigo py-5'>{book.media_type}</div>
        <div className='bg-indigo py-5'>{book.title}</div>
        <div className='bg-indigo py-5'>{book.authors[0].name}</div>
        </>}
        </>
    )
}

export default ViewBook
