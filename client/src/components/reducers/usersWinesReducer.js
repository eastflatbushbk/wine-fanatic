const usersWinesReducer = (state=[], action) => {

    switch (action.type) {
        case "LOAD_USERS_WINES":
         return action.payload
          
        case "ADD_USERS_WINES":
            return [...state, action.payload]

        case "DELETE_USERS_WINES":
            return state.filter(usersWine => usersWine.id !== action.payload)
            
        case "UPDATE_USER_WINES":
            const updatedUsersWines = state.map(usersWine => {
              if(action.payload.id === usersWine.id) {
                return action.payload;
              } else {
                return usersWine;
              }
            })
            return updatedUsersWines;
          
           
          default:
            return state;
      }
      }
      
          export default usersWinesReducer;


