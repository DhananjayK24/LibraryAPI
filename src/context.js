import React from "react";
import {useState, useEffect, useCallback, useContext } from "react";

const AppContext = React.createContext();

const URL = "http://openlibrary.org/search.json?title=";

const AppProvider = ({children}) =>{
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = useCallback(async()=>{
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            console.log(docs);

            if(docs){
                const newBooks = docs.slice(0, 20).map((singleBook)=>{
                    const {key, author_name, cover_i, edition_count,
                           first_publish_year, title, ratings_average} = singleBook;
                    
                    return{
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average
                    }
                });
                console.log('NewBooks' + newBooks);
                setBooks(newBooks);

                if(newBooks.length > 1){
                    setTitle("Your Search Result");
                }
                else{
                    setTitle("No Book Found!")
                }
                setLoading(false);
            }
            else{
                setBooks([]);
                setTitle("No Book Found");
                setLoading(false);
            }
            
        }
        catch(error){   
            console.log(error);
        }
    }, [searchTerm]);

    useEffect(()=>{
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return(
        <AppContext.Provider value={{loading, setSearchTerm, title, setTitle, books}}>
            {children}
        </AppContext.Provider>
    )   
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};