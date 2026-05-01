import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../listedBooks/ListedReadList";

const Books = () => {



  return (
    <div className="container mx-auto">
      read list :{storedBooks.length}
      wish list :{wishList.length}
         <Tabs>
  <TabList>
    <Tab>Read List</Tab>
    <Tab>Wish List</Tab>
  </TabList>
 
  <TabPanel>
    <ListedReadList/>
  </TabPanel>
  <TabPanel>
    <ListedWishList/>
  </TabPanel>

    
         </Tabs>

      </div>
    );
};

export default Books;