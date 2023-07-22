import { setErrors } from "./errors"

export const loadWines = () => {
    return dispatch => {
       fetch('/wines')
      .then(resp => resp.json())
      .then(data => {
        const action = ({ type: "LOAD_WINES", payload: data })
        console.log(data)
        dispatch(action)
      })
    }
  }

  export const addWine = (newWine, navigate) => {
     return dispatch => {

      fetch("/wines", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newWine)
      })
       .then(resp => {
       if (resp.ok) {
            resp.json().then(addedWine => {
              //    postMatch(addedMatch)
              const action = ({ type: "ADD_WINE", payload: addedWine })
                           dispatch(action)
                 
                 navigate('/wines')
            })
        } else {
           resp.json().then(errors => {
              //    setErrors(errors.errors)
                console.log(errors)
                 console.log(errors.errors)
                 dispatch(setErrors(errors))
           })
        }
      })
  }
}

export const postReview = (createReview, wineObj) => {
      
      return dispatch => { 

  fetch("/reviews", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(createReview)
})
.then(resp => {
   if (resp.ok) {
        resp.json().then(addedReview => {
         
            const newReviews = [...wineObj.reviews, addedReview]
            
            const updatedwine = {...wineObj, reviews: newReviews}
             console.log(updatedwine)
              
          //    patchMatch(updatedMatch)
          const action = ({ type: "UPDATE_WINE", payload: updatedwine })
         
               dispatch(action)
              
           })
   } else {
       resp.json().then(error => {
          //   setErrors(errors.errors)
          dispatch(setErrors(error));
          
            console.log(error.errors)
            console.log(error)
       })
   }
})
}
}


 export const editWine  = (id, modifiedWine, navigate) => {

      return dispatch => {

        fetch(`/wines/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(modifiedWine)
      })
      .then(resp => {
         if (resp.ok) {
              resp.json().then(editedWine => {
                  //  patchMatch(editedWine)
                  console.log(editedWine)
                  const action = ({ type: "UPDATE_WINE", payload: editedWine })
                   dispatch(action)
                                    
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



 export const editReview = (id, editedReview, wines, wine_id, navigate) => {
        return dispatch =>{

          fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedReview)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(modifiedReview => {
  
                    const copyOfWines = [...wines]
                     
                    const wineToUpdate = copyOfWines.find(wine => wine.id === modifiedReview.wine.id)
                  
                    const reviewToUpdate = wineToUpdate.reviews.find( rev => rev.id === modifiedReview.id )
  
                    const idx = wineToUpdate.reviews.indexOf(reviewToUpdate)
                 
                    delete modifiedReview.wine ;
                   
                    wineToUpdate.reviews.splice(idx, 1, modifiedReview)
                  
                    // patchMatch(matchToUpdate)
                    const action = ({ type: "UPDATE_WINE", payload: wineToUpdate })
                    dispatch(action)
                   
                    
                    
                     navigate(`/wines/${wine_id}`)
                })
           } else {
               resp.json().then(errors => {
                    console.log(errors)
                    //  setErrors(errors.errors)
                    dispatch(setErrors(errors))
               })
           }
        })

        }
 }