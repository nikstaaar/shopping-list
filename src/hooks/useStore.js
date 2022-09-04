import create from "zustand";

const useStore = create((set) => {
  return {
    fetchedData: [],
    savedItems: [],
    handleData: (inputData) => {
      set({ fetchedData: inputData });
    },
    handleSavedItems: (inputData1, inputData2) => {
       set({savedItems: [...inputData1, inputData2]}) 
    },
    handleDeleteItems: (savedItems, savedItem) => {set({savedItems: savedItems.filter(savedItems => savedItems._id !== savedItem._id)})}
  };


});

export default useStore;