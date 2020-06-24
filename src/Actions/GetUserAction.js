import { Types } from '../type'

const GetUserAction = () => dispatch => {
        dispatch({
          type:Types.LOADING_TRUE
        })
        async function getUsers() {
            let url = 'https://jsonplaceholder.typicode.com/todos'
            await fetch(url)
            .then(response=>response.json())
            .then(resonse => {

              dispatch({
                type :  Types.GETUSER_TRUE,
                payload : Object.assign(resonse,{sucess:true})
              })
              dispatch({
                type:Types.LOADING_FALSE
              })
            })
            .catch(error=>{
              dispatch({
                  type :  Types.GETUSER_FALSE,
                  payload : {
                    sucess:false
                  }

              })
              dispatch({
                type:Types.LOADING_FALSE
              })
              console.log("error",error)
            })
      }
      getUsers()
}
  export default GetUserAction;
