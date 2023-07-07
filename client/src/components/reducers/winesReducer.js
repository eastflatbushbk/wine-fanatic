const initialState = {
  wines: []
  
}

const winesReducer = (state=initialState, action) => {

  switch (action.type) {
  case "LOAD_WINES":
    // return action.payload
    // default:
    //     return state;
    return {
      ...state,
       wines: action.payload
             
    }
    case "ADD_WINE":
      return {
        ...state,
        wines: [...state.wines, action.payload]
    }
    case "UPDATE_WINE":
      const updatedWines = state.map(wine => {
        if(action.payload.id === wine.id) {
          return action.payload;
        } else {
          return wine;
        }
      })
      return updatedWines;
     
     
    default:
      return state;
}
}
// case "LOAD_ITEM":
    //     return {
    //       ...state,
    //        item: action.payload
    //     }
    export default winesReducer;