import { Types } from '../type';

const LoadingReducer = (state=false,{ type }) =>{
    switch (type) {
      case Types.LOADING_TRUE :
        return true
        case Types.LOADING_FALSE:
        return false;
      default:
        return  false;

    }

}
export default LoadingReducer;
