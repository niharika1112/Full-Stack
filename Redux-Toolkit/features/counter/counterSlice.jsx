import { createSlice } from '@reduxjs/toolkit'

// initial state of the slice
const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
//   reducer Function of slice
  reducers: {
    // action:
    increment: (state) => {
     
      state.value += 1
    },
     // action:
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
     // action:
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer