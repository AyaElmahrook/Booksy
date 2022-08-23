import React from 'react'
import {useState, useEffect} from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  function toggleVisibility(){
    if(window.pageYOffset > 300){
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }
  }
   function scrollToTop(){
    window.scrollTo({top:0, left: 0,behavior:'smooth'})
   }
   useEffect(() => {
    window.addEventListener('scroll',toggleVisibility);
     return () => {
       window.removeEventListener('scroll',toggleVisibility)
     }
   }, [])
   
    return (
        <> 
        <div className='fixed right-2 bottom-2'>
      {isVisible?<button onClick={scrollToTop} 
      className="inline-flex items-center p-3 rounded-full shadow-sm text-white bg-indigo-900 transition-opacity hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
       <i className="fa-solid fa-arrow-up-long"></i>
      </button>:""}
      </div>
        </>
    )
}

export default ScrollToTop
