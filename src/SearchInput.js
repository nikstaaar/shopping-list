import useStore from "./hooks/useStore";
import { useState } from "react";

function SearchInput (){

const [searchItem, setSearchItem] = useState ([])
const [filteredItems, setFilteredItems] = useState([]);    

const data = useStore((state) => state.fetchedData);
const savedItems = useStore((state) => state.savedItems)
const handleSavedItems = useStore((state) => state.handleSavedItems)



return(
    <><h2>search</h2>
    <input type = "text" placeholder = "input search" value = {searchItem} onChange = {(event)=>{
      setSearchItem (event.target.value);
      const items = data.filter((item) => item.name.de.includes(searchItem));
      setFilteredItems(items);
      if(event.target.value === ""){
        setFilteredItems([])
      }
    }}></input>
    <ul>
    {filteredItems.map ((item)=> {
      return(
        <li key = {item._id}>
          <div>
            <p>{item.name.de}</p>
            <button onClick = {()=>{ 
            handleSavedItems(savedItems, item)
            setSearchItem([])
            setFilteredItems([])
            }}
            >
            Add
            </button>
          </div>
        </li>
      )
    })}
    </ul>
    </>
)}

export default SearchInput