import useStore from "../hooks/useStore";
import { useState } from "react";
import "../styles.css"

function SearchInput (){

const [searchItem, setSearchItem] = useState ([])
const [filteredItems, setFilteredItems] = useState([]);    

const data = useStore((state) => state.fetchedData);
const savedItems = useStore((state) => state.savedItems)
const handleSavedItems = useStore((state) => state.handleSavedItems)



return(
    <>
    {searchItem.length ? <p>Add the Items you need to your Shopping-List.</p> : <p>Enter the Item you are looking for below.</p>}
    <input type = "search" placeholder = "..." value = {searchItem} onChange = {(event)=>{
      const nextSearchitem =  event.target.value;
      setSearchItem (nextSearchitem);
      const items = data.filter((item) => item.name.de.toLowerCase().includes(nextSearchitem.toLowerCase()));
      setFilteredItems(items);
      if(event.target.value === ""){
        setFilteredItems([])
      }
      /// Here the item is actually set
    }}></input>
    <ul className="input-list">
    {filteredItems.map ((item)=> {
      return(
        <li key = {item._id}>
          <div className = "input-list__item">
            <p>{item.name.de}</p>
            <button className ="input-list__button" onClick = {()=>{ 
            handleSavedItems(savedItems, item)
            setSearchItem("")
            setFilteredItems([])
            }}
            >
            Add
            </button>
          </div>
        </li>
      )
    })}
    {filteredItems.length === 0 && searchItem.length > 0 &&
        <p>
          There is no such Item...
        </p>
      }
    </ul>
    </>
)}

export default SearchInput