import { Types } from '../type'

const FilterAction = (user,num) => dispatch => {
      dispatch({
        type:Types.LOADING_TRUE
      })
      function filter() {
        dispatch({
          type:Types.FILTER_USER,
          payload : user.slice(0,num)
        })
        dispatch({
          type:Types.LOADING_FALSE
        })
      }
      setTimeout(()=> filter(),500 )



}

export default FilterAction;
