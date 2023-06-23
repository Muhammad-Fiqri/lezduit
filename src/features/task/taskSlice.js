import { createSlice } from '@reduxjs/toolkit'

export const TaskSlice = createSlice({
  name: 'task',
  initialState: {
    value: [{id: 0, name: "Task 1"}],
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