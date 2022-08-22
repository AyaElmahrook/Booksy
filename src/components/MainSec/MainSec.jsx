import React from 'react'

function MainSec(props) {
    return (
        <>
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 py-3 sm:px-0">
                        <div className="rounded-lg h-92 bg-pink-50 p-3">
                            <div className="grid grid-cols-6 gap-6 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static lg:flex lg:items-center lg:justify-between">
                                <div className="col-span-6 sm:col-span-3 sm:max-w-lg">
                                    <h3 className='text-xl tracking-tight text-gray-900 sm:text-6xl'>{props.header}</h3>
                                    <p className='mt-4 text-xl text-gray-500'>{props.desc}</p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img src={props.src} alt='Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.' className="w-full h-full object-center object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainSec
