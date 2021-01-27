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
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${makeid(2)}&orderBy=relevance&key=${process.env.REACT_APP_BOOKS_TOKEN}`)
            .then((response) => {
                setBookData(response.data.items)
                setIsLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    function removeLastCharacter(str) {
        if (str.length > 500) {
            str = str.slice(0, -200) + '...';
        }
        if (str.length > 240) {
            str = str.slice(0, -120) + '...';
        }
        if (str.length > 120) {
            str = str.slice(0, -60) + '...';
        }
        if (str.length > 30) {
            str = str.slice(0, -15) + '...';
        }
        if (str.length > 60) {
            str = str.slice(0, -30) + '...';
        }
        return str
    }

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
                <div className="titleButton">
                    <h2>Random Books</h2>
                    <div onClick={() => window.location.reload()}>Refresh content</div>
                </div>

                <div className="randomBook_list">
                    {

                        bookData.map((book) => {
                            return <RandomBookCard
                                key={book.id}
                                id={book.id}
                                title={book.volumeInfo.title ? removeLastCharacter(book.volumeInfo.title) : 'Name not aviable'}
                                img={book.volumeInfo.imageLinks === undefined ? 'Image not aviable' : book.volumeInfo.imageLinks.thumbnail}
                            />

                        })


                    }
                </div>


            </div>
        )
    }




}
