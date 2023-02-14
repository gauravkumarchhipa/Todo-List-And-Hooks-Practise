import { configureStore } from '@reduxjs/toolkit'
import Updown from './reducers/Updown'

export default configureStore({
  reducer: {
    counter: Updown,
  },
})