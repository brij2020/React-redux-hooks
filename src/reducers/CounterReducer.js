import { Types } from "../type";

function TestReducer(state = 0, { type, payload }) {
  switch (type) {
    case Types.DATA_SECCESS:
      return payload;
    case Types.DATA_FAIL:
      return payload;
    default:
      return state;
  }
}

export default TestReducer;
