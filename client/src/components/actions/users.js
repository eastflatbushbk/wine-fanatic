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
                  if (err.favorite_varietal !== undefined){ errorArr.push(`varietal : ${err.favorite_varietal}`) }
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


  