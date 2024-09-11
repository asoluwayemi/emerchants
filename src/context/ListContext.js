import { createContext, useState } from "react";

//Create your context
const ListContext = createContext();


//Create a provider
    //a component, knows or has everything that has to do with list 
    //inside
        //state
        //methods to manipulate the state
        //return something

const ListProvider = ({children}) =>{

            let defaultList = [
                {
                  id: 1,
                  name: "Iphone 15 Promax",
                  price: 25000000
                },
            
                {
                  id: 2,
                  name: "Play Station2",
                  price: 8000000
                },
            
                {
                  id: 3,
                  name: "Mikrotik",
                  price: 1000000
                }
            
    ];


const [lists, setList] = useState(defaultList);

const addNewList=(listDetail) =>{
    setList([...lists, listDetail]);
  }

  // A function that accept an id , and delete a list item that id fromthe list state
const deleteList = (id) => {
    let otherList = lists.filter((list) => {
  
      return list.id !== id
    })
  setList(otherList)

  }

  // A function that clears all the  items on the list
const clearAllList = () => {
    setList([]);
    }

    return(
        <ListContext.Provider value={{addNewList,deleteList,lists,clearAllList}}>{children}</ListContext.Provider>
      )
}
 
  export {ListContext, ListProvider}