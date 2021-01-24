import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar'
import MobileNavbar from '../../components/mobileNavbar'
import RandomBookCard from '../../components/randomBookCard'
import './style.css'


export default function RandomBook() {

    const [bookData, setBookData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // random letter generator
        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        // api  random + relevance
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${makeid(1)}&orderBy=relevance&key=${process.env.REACT_APP_BOOKS_TOKEN}`)
            .then((response) => {
                setBookData(response.data.items)
                setIsLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    if (isLoading) {
        return (
            <div className="randomBook">
                <MobileNavbar />
                <Navbar />
                <div className="loading_container">
                    <h3>Loading...</h3>
                </div>
            </div>
        )
    } else {
        return (
            <div className="randomBook">
                <MobileNavbar />
                <Navbar />
                <h2>Random Books</h2>
                <div className="randomBook_list">
                    {

                        bookData.map((book) => {
                            return <RandomBookCard key={book.id} id={book.id} title={book.volumeInfo.title} img={book.volumeInfo.imageLinks.thumbnail} />

                        })


                    }
                </div>


            </div>
        )
    }




}
