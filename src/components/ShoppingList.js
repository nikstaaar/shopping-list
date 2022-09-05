import useStore from "../hooks/useStore";
import "../styles.css"

function ShoppingList() {
  
const savedItems = useStore((state) => state.savedItems);
const handleDeleteItems = useStore((state) => state.handleDeleteItems)


return (
    <>
    <h1>SHOPPING-LIST</h1>
    <ul className="shopping-list">
      {savedItems.map ((savedItem)=>{
        return(
          <li key = {savedItem._id}>
            <div className = "shopping-list__item">
            <p>{savedItem.name.de}</p>
            <button className = "shopping-list__button" onClick = {()=>{
            handleDeleteItems(savedItems, savedItem)  
            }}
            >
            Delete
            </button>
            </div>
          </li>
        )
      })}
      {savedItems.length === 0 &&
        <p>
          Your Shopping-List is Emtpy
        </p>
      }
    </ul>
    
    </>
  );

  
}

export default ShoppingList