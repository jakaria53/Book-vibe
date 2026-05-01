import React from "react";

const ListedReadList = () => {
      const { readList} = useContext(BookContext);
  console.log( readList , "bookContext");

    if(readList.length === 0){
    return <div className="h-[50vh] bg-gray-100 flex items-center justify-center">

        <h2 className="font-bold text-3xl">No read data available</h2>

    </div>
    }
  return (
    <div>
   <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        readList.map((book , index) => (
            <BookCard key={index} book={book} />
        ))
       }
   </div>
       

    </div>
  );
}

export default ListedReadList;