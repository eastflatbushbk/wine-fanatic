




export const loadCurrentUser = (setLoading) => {
    return dispatch => {
      fetch('/me')
        .then(resp => resp.json())
        .then(data => {
          if(data.ok) {
            // dispatch an action that updates the store with the currentUser and logs us in
            // loginUser(data)
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


  