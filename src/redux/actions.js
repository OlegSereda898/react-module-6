// src/redux/actions.js

import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");

console.log(toggleCompleted(1));
// { type: "tasks/toggleCompleted", payload: 1 }

console.log(setStatusFilter("hello"));
// { type: "filters/setStatusFilter", payload: "hello" }
