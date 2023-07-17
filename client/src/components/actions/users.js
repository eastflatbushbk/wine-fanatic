import { setErrors } from "./errors"

export const loadUsers = (setLoading) => {
    return dispatch => {
      // asynchronous calls
      fetch('/users')
      .then(resp => resp.json())
      .then(data => {
        const action = ({ type: "LOAD_USERS", payload: data })
        console.log(data)
        setLoading(false);
        dispatch(action)
      })
    }
  }




export const loadCurrentUser = (setLoading) => {
    return dispatch => {
      fetch('/me')
        .then(resp => resp.json())
        .then(data => {
          if(data.ok) {
          const action = {
           type: "LOGIN_USER",
           payload: data
            }
            dispatch(action);
          } else {
            setLoading(false);
          }
        })
    }
}
//     fetch("/me").then((response) => {
//         if (response.ok) {
//           response.json().then(user => {
//             console.log(user)
//             // loginUser(user)
//             const action = {
//                           type: "LOGIN_USER",
//                           payload: user
//                         }
//                         dispatch(action);
//                        })
//         }
//         else {
//           setLoading(false)
//         }
//       })
//     }
//   }

  export const addToUsersWines = (newWine) => {

    return dispatch => {

        const addWine ={
             wine_id : newWine
        }
       
           console.log(newWine)
           console.log(addWine)
     fetch("/users_wines", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
       },
       body: JSON.stringify(addWine)
     })
      .then(resp => resp.json())
      .then(data => {
     const action = ({ type: "EDIT_USERS", payload: data })
     console.log(data)
     dispatch(action)
   })
 }
}

export const editCellarWine = (userWineId, editUsersWine, users, currentUser, navigate ) => {

    return dispatch => {

        fetch(`/users_wines/${userWineId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editUsersWine)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(editedUsersWine => {
                    //  patchMatch(editedWine)
                   console.log(editUsersWine)
                   console.log(users)
                   const copyOfUsers = [...users]
                  
                   console.log(copyOfUsers)
                const userToUpdate = copyOfUsers.find( user => user.id === currentUser.id )
                  console.log(userToUpdate)
                const usersWinesToUpdate = userToUpdate.users_wines.find( uW => uW.id === userWineId )
                console.log(usersWinesToUpdate)
                const idx = userToUpdate.users_wines.indexOf(usersWinesToUpdate)
             
                delete  editUsersWine.user ;
               
                userToUpdate.users_wines.splice(idx, 1, editedUsersWine)
              
                console.log(userToUpdate)

                    const action = ({ type: "EDIT_USERS", payload: userToUpdate })
                     dispatch(action)
                    //  setShowWine(showData)
                    
                     navigate('/wines')
                })
           } else {
               resp.json().then(errors => {
                    // setErrors(errors.error)
                    dispatch(setErrors(errors))
               })
           }
        })

    }


}
  