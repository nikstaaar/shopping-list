import create from "zustand";
import { persist } from 'zustand/middleware'

const useStore = create(
    persist((set) => {
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
},{
    name: 'items'
}));

export default useStore;