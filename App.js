import React from "react";
import CSRoute from "./Routes/index";
import { Provider } from 'react-redux'
import store from "./store";

const App = () => {
  return (<>
      <Provider store={store}>
        <CSRoute />
      </Provider>
  </>)

};
export default App;
