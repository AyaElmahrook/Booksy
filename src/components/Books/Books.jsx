import React, { useEffect, useState, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import MainSec from '../MainSec/MainSec';
import { Link } from 'react-router-dom';
import { booksContext } from '../Context/Store';

function Books() {
    let { books, loading } = useContext(booksContext)
    //initialize (pagination variables) page counter, no of results per page, offset pages counter
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 8;
    const offset = currentPage * PER_PAGE;
    const pageCounter = Math.ceil(books.length / PER_PAGE);
    // Invoke when user click to request another page.
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    //Dynamic run time search
const [filteredBooks, setFilteredBooks] = useState([]);
const [bookNotFound,setBookNotFound]=useState(false);
function findBook({target}){
  if(target.value !== ""){
    let searchBooks= books.filter((book)=>{return book.title.toLowerCase().includes(target.value.toLowerCase())});
    setFilteredBooks(searchBooks);
    if(searchBooks.length !== 0){
        setBookNotFound(false);
    }
    else
    {
        setBookNotFound(true);
    }
  }
 else clearBooks();
}
//remove filtered list
function clearBooks(){
    setFilteredBooks([]);
    setBookNotFound(false);
  }
useEffect(() => {
  }, [filteredBooks]);
    return (
        <>
            {/* Search input */}
            <div className="flex items-center justify-center w-100">
                <div className="md:flex space-x-10 text-center" id="txtSearch">
                    <input type="text" name="search" placeholder='Search by author, title, name' autoComplete="given-name"
                     className="mt-1 focus:ring-indigo-500 w-100 p-3 bg-gray-200 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                     onChange={(e)=>{return findBook(e)}}/>
                </div>
            </div>
            <MainSec header="Build your library" desc="Buy two selected books and git one for free" src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg'></MainSec>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Books</h2>
                    {loading ? <><h1 className='text-2xl font-bold tracking-tight text-gray-900'>Loading books...</h1></> : <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">                     
                        {filteredBooks.length !== 0 ?filteredBooks.slice(offset, offset + PER_PAGE).map((book, i) => {
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
                        }):bookNotFound?<h1 className="text-4xl text-gray-900">Book not found</h1>:
                        books.slice(offset, offset + PER_PAGE).map((book, i) => {
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
                        })
                        }
                    </div>}
                </div>
                <ReactPaginate
                    previousLabel="Pre"
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
