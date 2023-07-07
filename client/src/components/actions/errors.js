
export const setErrors = errors => {
    return {
      type: "SET_ERRORS",
      payload: errors
    }
  }
  
  export const clearErrors = () => {
    return {
      type: "CLEAR_ERRORS"
    }
  }

