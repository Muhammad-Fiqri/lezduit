import { createSlice } from '@reduxjs/toolkit'

export const TaskSlice = createSlice({
  name: 'task',
  initialState: {
    value: [{id: 3, name: "Task 3"},{id: 4, name: "Task 4"},{id: 5, name: "Task 5"},{id: 6, name: "Task 6"},
    {id: 7, name: "Task 7"},{id: 8, name: "Task 8"},{id: 9, name: "Task 9"},{id: 10, name: "Task 10"}],
  },
  reducers: {
    AddTask: (state, action) => {
      state.value.push({id : state.value.length, name : action.payload});
    },
    RemoveTask: (state, action) => {
      state.value = state.value.filter((val, idx, arr) => {
        return val.name != action.payload;
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddTask, RemoveTask } = TaskSlice.actions

export default TaskSlice.reducer