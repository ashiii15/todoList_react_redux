import {  legacy_createStore } from "redux";
import { todoReducer } from "./todoReducer";

export const store = legacy_createStore(todoReducer)