import create from "zustand";

const useStore = create((set) => {
  return {
    fetchedData: [],
    savedItems: [],
    filteredItems: [],
    handleData: (data) => {
      set({ fetchedData: data });
    },
    handleSavedItems: (savedItems, item) => {
       set({savedItems: [...savedItems, item]}) 
    },
    handleDeleteItems: (savedItems, savedItem) => {set({savedItems: savedItems.filter(savedItems => savedItems._id !== savedItem._id)})},
    handleFilteredItems: (inputData) => {set({filteredItems: [inputData]})}
  };


});

export default useStore;