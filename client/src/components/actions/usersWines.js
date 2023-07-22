import { setErrors } from "./errors"

export const loadUsersWines = () => {
    return dispatch => {
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
         const action = ({ type: "ADD_USERS_WINES", payload: data })
    
     dispatch(action)
    //  navigate to cellar
       navigate(`/cellars/${currentUser.id}`)
       
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
                
                    const action = ({ type: "UPDATE_USER_WINES", payload: editedUsersWine })
                     dispatch(action)
                    
                      navigate(`/cellars/${currentUser.id}`)
                    
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
  