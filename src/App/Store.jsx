import { configureStore } from '@reduxjs/toolkit'
import  changetheme  from '../Feature/changetheme'

export const store = configureStore({
  reducer: {
    theme : changetheme,
  },
})