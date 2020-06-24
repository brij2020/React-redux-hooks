import { Types } from '../type';

const FilterReducer = ( state =[],{type,payload}) => {

    switch (type) {
      case Types.FILTER_USER:
        return payload;

      default:
        return  state;
    }
}
export default FilterReducer;
