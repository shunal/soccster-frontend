const drillsReducer = (state = { drills: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_DRILLS':
        return {
          ...state,
          loading: true
        }
      case 'GET_DRILLS':
        return {
          drills: action.drills,
          loading: false
        }
      case 'ADD_DRILL':
        return {
          ...state,
          drills: [...state.drills, action.drill]
        }
      default:
        return state;
    }
  }
   
  export default drillsReducer;