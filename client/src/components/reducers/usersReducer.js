const initialState = {
  users: [],
  currentUser: null,
  loggedIn: false
}

const usersReducer = (state=initialState, action) => {

    switch(action.type) {
        case "LOAD_USERS":
          return {
            ...state,
            users: action.payload
        }
        case "LOGIN_USER":
          return {
            ...state,
            currentUser: action.payload,
            loggedIn: true
        }
        case "ADD_USER":
          return {
            ...state,
            users: [...state.users, action.payload]
        }
        case "LOGOUT_USER":
          return {
            ...state,
            currentUser: null,
            loggedIn: false
        }
        case "EDIT_USERS":
            const updatedUsers = state.map(user => {
                if(action.payload.id === user.id) {
                  return action.payload;
                } else {
                  return user;
                }
               })
               return updatedUsers
      
        default:
      return state;
    }
}

export default usersReducer;