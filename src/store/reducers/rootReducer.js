import { Form } from "react-router-dom";
import appReducer from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
