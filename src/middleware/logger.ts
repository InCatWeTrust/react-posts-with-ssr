import { Middleware } from "redux";
import { store } from "../store";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log('dispatching:', action)
  next(action)
}
