const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return action.items;
    case "ADD_ITEM":
      return [
        ...state,
        action.item
      ];
    case "REMOVE_ITEM":
      return state.filter((item) => item.firebaseId !== action.firebaseId);
    default:
      return;
  }
}

export default cartItemsReducer;
