import axios from 'axios';
import React, {useEffect, useState} from 'react'
import MainSec from '../MainSec/MainSec';

function Books() {
    const [books, setBooks] = useState([])
    async function getBooks(){
        let {data}= await axios.get("http://gutendex.com/books/")
        setBooks(data.results);
    }
    useEffect(() => {
        getBooks()   
    }, [])
    
    return (
        <>
        <MainSec header="Build your library" desc="Buy two selected books and git one for free" src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg'></MainSec>
        {books.map((book,i)=>{return (
            <></>
        )})}

<div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {books.map((book) => (
            <a key={book.id} href={book.formats["text/html"]} className="group" target='_blank'>
                <a download href={book.formats["text/plain; charset=utf-8"]} className="">Download</a>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={book.formats["image/jpeg"]}
                  alt={book.bookshelves[0]}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{book.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{book.authors[0].name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
        </>
    )
}

export default Books
