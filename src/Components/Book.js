import React from "react";
import Ratings from "./Ratings";

const Book = (book) =>{

    const countRatings = Math.floor(book.ratings_average);
         
    return(    
    <>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="p-8 rounded-t-lg w-96 h-96" src={book.cover_image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Ratings count={(countRatings>0) ? countRatings : 0}/>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{(countRatings>0) ? countRatings+'.0': countRatings}</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 font-bold ">
                Author:
                <br/>
                {(book.author) ? book.author : 'No record'} 
                </div>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
        </div>
    </div>
    </>
    
    )
}

export default Book;