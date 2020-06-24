import { Types } from '../type'

const TestAction = data => dispatch =>{
    dispatch({
        type:Types.DATA_SECCESS,
        payload:data
    })
}

export default TestAction
