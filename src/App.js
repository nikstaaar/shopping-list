import React, { useEffect, useState } from "react";


function App() {

useEffect(()=>{
  async function fetchData() {
    const response = await fetch(
      `https://fetch-me.vercel.app/api/shopping/items`
    );
    const json = await response.json();
    setData(json.data)
  }
  
fetchData();
},[])


  
const [data, setData] = useState ([])
const [searchItem, setSearchItem] = useState ([])
const [filteredItems, setFilteredItems] = useState([]);
const [savedItems, setSavedItems] = useState([])



  return (
    <>
    <h1>Shopping List</h1>
  
    <h2>search</h2>
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
            setSavedItems([...savedItems, item])
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
    <ul>
      {savedItems.map ((savedItem)=>{
        return(
          <li key = {savedItem._id}>
            <p>{savedItem.name.de}</p>
            <button onClick = {()=>{
            setSavedItems([...savedItems])  
            
            }}
            >
            Delete
            </button>
          </li>
        )
      })}
    </ul>
    </>
  );


}

export default App;
