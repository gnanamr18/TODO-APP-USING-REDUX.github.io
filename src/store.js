import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../src/features/todo/todoslice'

const store = configureStore({
   reducer: todoReducer
})

export default store