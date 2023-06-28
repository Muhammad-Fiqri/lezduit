import { createSlice } from '@reduxjs/toolkit'

//function to set the redux task storage with localStorage of task
function setValue() {
  var task = []
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      task.push({id: key.toString(), "name": localStorage[key]});
    }
  }
  return task;
}

export const TaskSlice = createSlice({
  name: 'task',
  initialState: {
    value: setValue()
  },
  reducers: {
    //Add Task To Local Storage and Redux Storage
    AddTask: (state, action) => {
      localStorage.setItem(state.value.length, action.payload);
      state.value.push({id : state.value.length, name : action.payload});
    },

    //Remove Task with the same ID of clicked to do task in the local and redux storage
    RemoveTask: (state, action) => {
      state.value = state.value.filter((val, idx, arr) => {
        return val.id != action.payload.id;
      })

      localStorage.removeItem(action.payload.id);
    },
  },
})


// Action creators are generated for each case reducer function
export const { AddTask, RemoveTask } = TaskSlice.actions

//to export to store
export default TaskSlice.reducer