import useStore from "./hooks/useStore";

function ShoppingList() {

const savedItems = useStore((state) => state.savedItems);
const handleDeleteItems = useStore((state) => state.handleDeleteItems)


return (
    <>
    <h1>Shopping List</h1>
    {savedItems.length === 0 &&
        <p>
          Your Shopping-List is Emtpy
        </p>
      }
    <ul>
      {savedItems.map ((savedItem)=>{
        return(
          <li key = {savedItem._id}>
            <p>{savedItem.name.de}</p>
            <button onClick = {()=>{
            handleDeleteItems(savedItems, savedItem)  
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

export default ShoppingList