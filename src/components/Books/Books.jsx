import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import MainSec from '../MainSec/MainSec';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([])
    const [loading,setLoading] = useState(true);
    async function getBooks() {
        let { data } = await axios.get("http://gutendex.com/books/")
        setBooks(data.results);
        setLoading(false);
    }
    useEffect(() => {
        getBooks()
    }, [])
  //initialize (pagination variables) page counter, no of results per page, offset pages counter
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 12;
  const offset = currentPage * PER_PAGE;
  const pageCounter = Math.ceil(books.length / PER_PAGE);
  // Invoke when user click to request another page.
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
    return (
        <>
            <MainSec header="Build your library" desc="Buy two selected books and git one for free" src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg'></MainSec>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Books</h2>
                     {loading?<><h1 className='text-2xl font-bold tracking-tight text-gray-900'>Loading books...</h1></>: <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {books.slice(offset, offset + PER_PAGE).map((book,i) => {
                            return (
                                <div key={i} className="group parent-block">
                                    <div className='child-block'>
                                        <a download href={book.formats["application/x-mobipocket-ebook"]} className="child-pose"><i className="pt-5 fa-solid fa-download"></i></a>
                                    </div>
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <Link to={'/viewBook/' + book.id}>
                                            <img
                                                src={book.formats["image/jpeg"]}
                                                alt={book.bookshelves[0]} className="w-full h-full object-center object-cover"
                                            />
                                        </Link>
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">{book.title}</h3>
                                    <p className="mt-1 text-sm  text-gray-700">{book.authors[0].name}</p>
                                </div>
                            )
                        })}
                    </div>}
                </div>
                <ReactPaginate
        previousLabel="Per"
        breakLabel="..."
        nextLabel="Nex"
        pageCount={pageCounter}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previosClassName={"pagination-link"}
        nextClassName={"pagination-link"}
        activeClassName={"pagination-link-active"}
        disabledClassName={"pagination-link-disabled"}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
      />
            </div>
        </>
    )
}

export default Books
