import React from "react";

import Book from "./Book";
import { useGlobalContext } from "../context";
import Loading from "./Loading";


const BookList = () =>{

    const {loading, title, books} = useGlobalContext();

    const eachBook = books.map((singlebook)=>{
        return{
            ...singlebook,
            id: (singlebook.id).replace("/works/", ""),
            cover_image: singlebook.cover_id ? `https://covers.openlibrary.org/b/id/${singlebook.cover_id}-L.jpg`
                                             : `https://www.shutterstock.com/image-vector/page-not-found-404-error-260nw-774749455.jpg`
        }
    });

    if(loading){
        return (
        <main className="grid grid-cols-4 gap-4 my-8 ml-3 justify-center" style={{marginLeft: '45px'}}>
        <Loading count={12} size={10}/>
        </main>
        )
    }

    return(
        <main className="grid grid-cols-4 gap-4 my-8 ml-3 justify-center" style={{marginLeft: '45px'}}>

        {
        eachBook.slice(0, 30).map((item, index)=>{
            return (
                <Book key={index} {...item} />
            )
        })
        }
        </main>
    )
};

export default BookList;