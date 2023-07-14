export const loadUsers = () => {
    return dispatch => {
      // asynchronous calls
      fetch('/users')
      .then(resp => resp.json())
      .then(data => {
        const action = ({ type: "LOAD_USERS", payload: data })
        console.log(data)
        dispatch(action)
      })
    }
  }




export const loadCurrentUser = (setLoading) => {
    return dispatch => {
    //   fetch('/me')
    //     .then(resp => resp.json())
    //     .then(data => {
    //       if(data.ok) {
    //         // dispatch an action that updates the store with the currentUser and logs us in
    //         // loginUser(data)
    //         const action = {
    //           type: "LOGIN_USER",
    //           payload: data
    //         }
    //         dispatch(action);
    //       } else {
    //         setLoading(false);
    //       }
    //     })
    fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then(user => {
            console.log(user)
            // loginUser(user)
            const action = {
                          type: "LOGIN_USER",
                          payload: user
                        }
                        dispatch(action);
                       })
        }
        else {
          setLoading(false)
        }
      })
    }
  }


  