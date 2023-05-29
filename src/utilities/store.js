import { configureStore } from '@reduxjs/toolkit'
import WalletSlice from './WalletSlice'
import TodoListsSlice from './TodoListsSlice'

const store = configureStore({
  reducer:{
    wallet:WalletSlice,
    todolists:TodoListsSlice
  }
})

export default store