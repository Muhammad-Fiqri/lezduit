import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/task/taskSlice.js'

export default configureStore({
  reducer: {
    task : taskReducer,
  },
})