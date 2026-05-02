const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    if (allReadList) 
      return JSON.parse(allReadList);
      return[];
    };

    const addReadListToLocalDB = (book) => {
        const allBooks = getAllReadListFromLocalDB();
        const isAlreadyExistBook = allBooks.find((b) => b.bookId === book.bookId);
        if (!isAlreadyExistBook) {
            allBooks.push(book);
            localStorage.setItem("readList", JSON.stringify(allBooks));
        }

    };

    export { getAllReadListFromLocalDB, addReadListToLocalDB };