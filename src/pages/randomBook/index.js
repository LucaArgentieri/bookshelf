import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import MobileNavbar from '../../components/mobileNavbar'
import RandomBookCard from '../../components/randomBookCard'
import './style.css'


export default function RandomBook() {

    const [bookData, setBookData] = useState([])

    useEffect(() => {
        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }


        fetch(`https://www.googleapis.com/books/v1/volumes?q=${makeid(1)}&orderBy=relevance&key=${process.env.REACT_APP_BOOKS_TOKEN}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookData(data.items)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="randomBook">
            <MobileNavbar />
            <Navbar />
            <h2>Random Book</h2>
            <div className="randomBook_list">
                {
                    bookData.map((book) => {
                        return <RandomBookCard key={book.id} title={book.volumeInfo.title} img={book.volumeInfo.imageLinks.thumbnail} />

                    })
                }
            </div>
        </div>
    )
}
