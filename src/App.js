import React, { useEffect} from "react";
import ShoppingList from "./components/ShoppingList";
import SearchInput from "./components/SearchInput";
import useStore from "./hooks/useStore";
import GlobalStyle from "./GlobalStyles";

function App() {

useEffect(()=>{
fetchData();
},[])


const handleData = useStore((state) => state.handleData);   

return(
  <>
  <GlobalStyle></GlobalStyle>
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
