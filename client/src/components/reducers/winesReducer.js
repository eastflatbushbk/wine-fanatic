
const winesReducer = (state=[], action) => {

  switch (action.type) {
  case "LOAD_WINES":
   return action.payload
    
    case "ADD_WINE":
      return [...state, action.payload]
      
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

    export default winesReducer;