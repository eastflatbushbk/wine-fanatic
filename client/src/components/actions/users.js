import { setErrors } from "./errors"

export const loadUsers = (setLoading) => {
    return dispatch => {
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


export const loginUser = (username, password, navigate) => {
    return dispatch => {

        fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
          })
            .then(res => {
              if (res.ok) {
                res.json().then(user => {
                  // loginUser(user)
                  console.log(user)
                  const action = {
                      type: "LOGIN_USER",
                      payload: user
                    }
                    dispatch(action)
                  navigate('/wines')
                })
              } else {
                res.json().then(err => {
                  
                  // setErrors(err.errors)
                  dispatch(setErrors(err));
                  console.log(err.errors)
                })
              }
            })
    }
}



export const signInUser = (createUser,navigate ) => {
    return dispatch => {

        fetch('/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(createUser)
          })
             .then(res => {
              if (res.ok) {
                res.json().then(user => {
                  // addUser(user)
                  const addUserAction = {
                      type: "ADD_USER",
                      payload: user
                    }
                    dispatch(addUserAction)
                  // loginUser(user)
                  const loginAction = {
                      type: "LOGIN_USER",
                      payload: user
                    }
                    dispatch(loginAction)
                  navigate('/wines')
                })
              } else {
                res.json().then(err => {
                  console.log(err)
                  console.log(err.age)
                  const errorArr = []
                   if (err.age !== undefined){ errorArr.push(`age : ${err.age}`) }
                   if (err.username !== undefined){errorArr.push(`username : ${err.username}`)}
                  if (err.location !== undefined){ errorArr.push(`location : ${err.location}`) }
                  if (err.favorite_varietal !== undefined){ errorArr.push(`favorite_club : ${err.favorite_varietal}`) }
                  if (err.password !== undefined){ errorArr.push(`password : ${err.password}`) }
                  if (err.password_confirmation !== undefined){ errorArr.push(`password_confirmation : ${err.password_confirmation}`) }
                   console.log(errorArr)
                  //  setErrors(errorArr)
                   dispatch(setErrors(errorArr));
                })
              }
            })
    }
}


  export const addToUsersWines = (newWine, navigate, currentUser, users) => {

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
      .then(res => {
  if (res.ok) {
    res.json().then(data => {
          console.log(data)

               const copyOfUsers = [...users]
     
                   console.log(copyOfUsers)
                const userToUpdate = copyOfUsers.find( user => user.id === currentUser.id )
                  console.log(userToUpdate)
                  //  delete  data.user ;
                const  newUserWine = [...userToUpdate.users_wines, data ]
                const updatedUserWine = {...userToUpdate, users_wines: newUserWine}
                console.log(updatedUserWine)

                // const usersWinesToUpdate = userToUpdate.users_wines.find( uW => uW.id === userWineId )
                // console.log(usersWinesToUpdate)
                // const idx = userToUpdate.users_wines.indexOf(usersWinesToUpdate)
             
               
                // console.log(data)
               
                // userToUpdate.users_wines.splice(idx, 1, data)
              
                // console.log(userToUpdate)
      const action = ({ type: "EDIT_USERS", payload: updatedUserWine })
    //  console.log(data)
     dispatch(action)
    //  navite to cellar
       navigate(`/cellars/${currentUser.id}`)
        //  navigate('/wines')
    })
  } else {
    res.json().then(err => {
      
      // setErrors(err.errors)
      dispatch(setErrors(err));
      // console.log(err.errors)
      console.log(err)
    })
  }
})

   }
 }








export const editCellarWine = (userWineId, editUsersWine, users, currentUser, navigate ) => {

    return dispatch => {
               console.log(editUsersWine)
               console.log(userWineId)

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
                console.log(editUsersWine)
               
                userToUpdate.users_wines.splice(idx, 1, editedUsersWine)
              
                console.log(userToUpdate)

                    // const action = ({ type: "EDIT_USERS", payload: userToUpdate })
                    //  dispatch(action)

                    // const editAction = { type: "EDIT_USERS", payload: userToUpdate };
                    // const loginAction = { type: "LOGIN_USER", payload: userToUpdate };
                    // dispatch(loginAction);
                    // dispatch(editAction);
                        
                    //  setShowWine(showData)
                    // debugger
                    //  navigate(`/cellars/${currentUser.id}`)
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
  