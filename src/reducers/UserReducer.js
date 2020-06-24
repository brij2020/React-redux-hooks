import { Types } from "../type";

function GetUser(state = 0, { type, payload }) {
  switch (type) {
    case Types.GETUSER_TRUE:
      return payload;
    case Types.GETUSER_FALSE:
      return payload;
    default:
      return state;
  }
}

export default GetUser;
