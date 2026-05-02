import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router";



const BookCard = ({ book }) => {
const { bookName, author, image, rating, totalPages } = book;    return (
        <div className="card bg-base-100 shadow-md">
            <figure>
                <img src={image} alt={bookName} className="h-64 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>Author: {author}</p>
                <p>Rating: {rating}</p>
                <p>Pages: {totalPages}</p>
            </div>
        </div>
    );
}

export default BookCard;
