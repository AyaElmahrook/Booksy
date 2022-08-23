import React, {useContext} from 'react'
import { booksContext } from '../Context/Store';
import MainSec from '../MainSec/MainSec';
import {Link} from 'react-router-dom';

function Home() {
    let {books,loading}=useContext(booksContext);
    return (
        <>
         <MainSec header="Popular Now" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"></MainSec>
         <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Books</h2>
                     {loading?<div className='view-h-25 flex items-center justify-center'><h1 className='text-2xl font-bold tracking-tight text-gray-900'><i className="fa-solid fa-spinner fa-spin"></i> Loading Popular books...</h1></div>: <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {books.slice(0,4).map((book,i) => {
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
            </div>
        </>
    )
}

export default Home
