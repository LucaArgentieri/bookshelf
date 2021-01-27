import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar'
import MobileNavbar from '../../components/mobileNavbar'
import SingleBook from '../../components/singleBook'
import { useParams } from 'react-router-dom'


export default function Books() {

    const { id } = useParams()
    const [bookData, setBookData] = useState([])



    useEffect(() => {

        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((resp) => {
                setBookData(resp.data)
            })
            .catch((err) => {
                console.error(err)

            })

    }, [id])


    if (!bookData.volumeInfo) {
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
            <div>
                <MobileNavbar />
                <Navbar />
                {

                    <SingleBook key={bookData.id}
                        title={bookData.volumeInfo.title ? bookData.volumeInfo.title : 'Title not aviable'}
                        subtitle={bookData.volumeInfo.subtitle ? " - " + bookData.volumeInfo.subtitle : ''}
                        authors={bookData.volumeInfo.authors ? bookData.volumeInfo.authors : 'Authors not aviable'}
                        description={bookData.volumeInfo.description ? bookData.volumeInfo.description : 'Description not aviable'}
                        publisher={bookData.volumeInfo.publisher ? bookData.volumeInfo.publisher : 'Publisher not aviable'}
                        img={bookData.volumeInfo.imageLinks ? bookData.volumeInfo.imageLinks.thumbnail || bookData.volumeInfo.imageLinks.smallThumbnail : 'Image not aviable'}
                        price={bookData.saleInfo.listPrice ? bookData.saleInfo.listPrice.amount : 'Price not aviable'}
                        currency={bookData.saleInfo.listPrice ? bookData.saleInfo.listPrice.currencyCode = '€' : ''}
                    />

                }
            </div>
        )
    }




}
