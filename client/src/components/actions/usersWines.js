import { setErrors } from "./errors"

export const loadUsersWines = () => {
    return dispatch => {
      // asynchronous calls
      fetch('/users_wines')
      .then(resp => resp.json())
      .then(data => {
        const action = ({ type: "LOAD_USERS_WINES", payload: data })
        console.log(data)
        dispatch(action)
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

            //    const copyOfUsers = [...users]
     
            //        console.log(copyOfUsers)
            //     const userToUpdate = copyOfUsers.find( user => user.id === currentUser.id )
            //       console.log(userToUpdate)
                  //  delete  data.user ;
                // const  newUserWine = [...userToUpdate.users_wines, data ]
                // const updatedUserWine = {...userToUpdate, users_wines: newUserWine}
                // console.log(updatedUserWine)

                // const usersWinesToUpdate = userToUpdate.users_wines.find( uW => uW.id === userWineId )
                // console.log(usersWinesToUpdate)
                // const idx = userToUpdate.users_wines.indexOf(usersWinesToUpdate)
             
               
                // console.log(data)
               
                // userToUpdate.users_wines.splice(idx, 1, data)
              
                // console.log(userToUpdate)
      const action = ({ type: "ADD_USERS_WINES", payload: data })
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
                //    console.log(users)
                //    const copyOfUsers = [...users]
                  
                //    console.log(copyOfUsers)
                // const userToUpdate = copyOfUsers.find( user => user.id === currentUser.id )
                //   console.log(userToUpdate)
                // const usersWinesToUpdate = userToUpdate.users_wines.find( uW => uW.id === userWineId )
                // console.log(usersWinesToUpdate)
                // const idx = userToUpdate.users_wines.indexOf(usersWinesToUpdate)
             
                // delete  editUsersWine.user ;
                // console.log(editUsersWine)
               
                // userToUpdate.users_wines.splice(idx, 1, editedUsersWine)
              
                // console.log(userToUpdate)

                    const action = ({ type: "UPDATE_USER_WINES", payload: editedUsersWine })
                     dispatch(action)

                    // const editAction = { type: "EDIT_USERS", payload: userToUpdate };
                    // const loginAction = { type: "LOGIN_USER", payload: userToUpdate };
                    // dispatch(loginAction);
                    // dispatch(editAction);
                        
                    //  setShowWine(showData)
                    // debugger
                      navigate(`/cellars/${currentUser.id}`)
                    //   navigate('/wines')
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
  