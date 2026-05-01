import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readList.find((book) => book.bookId === currentBook.bookId
);
    if (isExistBook) {
      toast.error("You have already marked this book as read.");
    } else {
      setReadList([...readList, currentBook]);
      alert(`${currentBook.bookName} is added to your read list.`);
    }
   console.log(currentBook, readList , "Books")
  };

   const handleWishList = (currentBook) => {
    const isExistInReadList = wishList.find((book) => book.bookId === currentBook.bookId
);
    if (isExistInReadList) {
      toast.error("You have already added this book to your read list.");
      return;
    }
    const isExistBook =wishList.find((book) => book.bookId === currentBook.bookId
);    if (isExistBook) {
      toast.error("You have already added this book to your wishlist.");
    }
     else {
      setWishList([...wishList, currentBook]);
      alert(`${currentBook.bookName} is added to your wishlist.`);
    }
   console.log(currentBook, storedBooks , "Books")
  };
  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList  
    
  };


  return (
    <BookContext.Provider value={data}>{children}
    </BookContext.Provider>
  );
};

export default BookProvider;