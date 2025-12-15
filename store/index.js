import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { AuthAPI } from '../service/auth'

export const store = configureStore({
  reducer: {
  
    [AuthAPI.reducerPath]: AuthAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthAPI.middleware),
})

setupListeners(store.dispatch)