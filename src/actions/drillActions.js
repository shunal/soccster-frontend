export const fetchDrills = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DRILLS'})
      fetch('https://soccster-api.herokuapp.com//drills').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'GET_DRILLS', drills: responseJSON })
      })
    }
  }