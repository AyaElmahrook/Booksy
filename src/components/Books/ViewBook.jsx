import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/solid'


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ViewBook() {
    let routeParam = useParams();

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    async function getBook(bookId) {
        let { data } = await axios.get("http://gutendex.com/books/" + bookId)
        setBook(data);
        setLoading(false);
    }

    useEffect(() => {
        getBook(routeParam.bookId);
    }, [])
    return (
        <>
            {loading ? <div className='view-h flex items-center justify-center'><h1 className='text-2xl font-bold tracking-tight text-gray-900'><i className="fa-solid fa-spinner fa-spin"></i> Loading book details...</h1></div> : <>
                <div className="bg-gray-100 flex items-center">
                    {/* Product info */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 ">
                        <div className="lg:col-span-2 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-3xl">
                                {book.title}
                            </h1>
                        </div>
                        <div className="mt-6">
                            {/* Downloads */}
                            <h3 className="sr-only">Downloads</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {book.download_count} download
                                </a>
                            </div>
                            {/* Languages */}
                            <h2 className="sr-only">Book information</h2>
                            <p className="text-3xl text-gray-900">Language : {book.languages}</p>
                        </div>
                        <div className="py-2 lg:pt-2 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Authors</h3>

                                <div className="mt-4">
                                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                        {book.authors.map((author, i) => (
                                            <li key={i} className="text-gray-400">
                                                <span className="text-gray-600">{author.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Book shelves</h3>

                                <div className="mt-4">
                                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                        {book.bookshelves.map((bookshelve, i) => (
                                            <li key={i} className="text-gray-400">
                                                <span className="text-gray-600">{bookshelve}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Subjects</h3>

                                <div className="mt-4">
                                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                        {book.subjects.map((subject, i) => (
                                            <li key={i} className="text-gray-400">
                                                <span className="text-gray-600">{subject}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Read throw</h3>

                                <div className="mt-4">
                                    <a href={book.formats["application/epub+zip"]} className="text-gray-600">{book.formats["application/epub+zip"]}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )

}

export default ViewBook
