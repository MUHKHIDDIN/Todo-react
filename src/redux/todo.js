import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todoList.push(action.payload);
    },
    remove: (state, action) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload);
    },
    update: (state, action) => {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload.id ? { ...item, name: action.payload.name } : item
      );
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, update } = todoSlice.actions;
