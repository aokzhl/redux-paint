import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
  Action,
} from "@reduxjs/toolkit";
import { currentStroke } from "./modules/currentStroke/slice";
import historyIndex from "./modules/historyIndex/slice";
import strokes from "./modules/strokes/slice";
import { modalVisible } from "./modules/modals/slice";
import { projectsList } from "./modules/projectsList/slice";
import { logger } from "redux-logger";
import { RootState } from "./utils/types";
import { ThunkAction } from "redux-thunk";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: combineReducers({
    historyIndex,
    currentStroke,
    strokes,
    modalVisible,
    projectsList,
  }),
  middleware,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
