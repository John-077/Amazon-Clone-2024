// import { Type } from "./action.type";

export const initialState = {
  basket: [],
};
 const reducer = (state, action) => {
   console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // * check if item exists
      const existingItem = state.basket.find((item)=>item.id === action.item.id)
     if (!existingItem) {
      return {
        ...state,
        basket : [...state.basket,{...action.item, amount:1}]
      }
     }else {
      const updateBasket = state.basket.map((item) => {
        return item.id === action.item.id? {...item,amount:item.amount + 1} : item
      })
      return {
        ...state,
        basket :updateBasket
      }
     }
    default:
      return state;
  }
};

export default reducer;
