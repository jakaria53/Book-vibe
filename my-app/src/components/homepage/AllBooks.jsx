import React from "react";

const bookPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
  const books = use(bookPromise);
  console.log(books , "books");

  return (
    <div className="my-12 container mx-auto">
        <h2 className="font-bold text-3xl text-center">All Books</h2>

        {
          books.map((book) => {
            return <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  {books.map((book) => {
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={book.image} alt={book.bookName} />
        </figure>
        <div className="card-body">
       {book.tags.map((tag) => (
          <div className="badge badge-secondary">{tag}</div>
        ))}
          <h2 className="card-title text-xl">{book.bookName}</h2>
          <p className="font-semibold text-lg">{book.author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

    );
  })}
  </div>
</div>  
          })
        }
    </div>
  );
}



export default AllBooks;