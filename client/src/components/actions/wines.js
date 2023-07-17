export const loadWines = () => {
    return dispatch => {
      // asynchronous calls
      fetch('/wines')
      .then(resp => resp.json())
      .then(data => {
        const action = ({ type: "LOAD_WINES", payload: data })
        console.log(data)
        dispatch(action)
      })
    }
  }

  export const addWines = (newWine) => {
     return dispatch => {

      fetch("/wines", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newWine)
      })
       .then(resp => resp.json())
       .then(data => {
      const action = ({ type: "LOAD_WINES", payload: data })
      console.log(data)
      dispatch(action)
    })
  }
}

//  if (resp.ok) {
      //       resp.json().then(addedMatch => {
      //            postMatch(addedMatch)
      //            setNewMatch(defaultData)
      //            navigate('/match')
      //       })
      //   } else {
      //      resp.json().then(errors => {
      //            setErrors(errors.errors)
      //           console.log(errors)
      //            console.log(errors.errors)
      //      })
      //   }
  //    })
  //    }

  // }
 