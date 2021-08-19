const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return action.items;
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_FIREBASE_ITEM":
      return state.filter((item) => item.firebaseId !== action.firebaseId);
    case "REMOVE_LOCALSTORAGE_ITEM":
      return state.filter((item) => item.productUid !== action.productUid);
    case "UPDATE_ITEM_QUANTITY":
      state.splice(action.index, 1, action.updatedItem);
      return state;
    default:
      return;
  }
};

export default cartItemsReducer;
