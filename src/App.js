import React, { useEffect} from "react";
import ShoppingList from "./ShoppingList"
import SearchInput from "./SearchInput";
import useStore from "./hooks/useStore";

function App() {

useEffect(()=>{
fetchData();
},[])


const handleData = useStore((state) => state.handleData);   

return(
  <>
  <ShoppingList></ShoppingList>
  <SearchInput></SearchInput>
  </>
)


async function fetchData() {
  const response = await fetch(
    `https://fetch-me.vercel.app/api/shopping/items`
  );
  const json = await response.json();
  handleData(json.data)
}

}

export default App;
