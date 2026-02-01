// import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./features/counterSlice";
// import counterReducer from "./features/counterSlice";

// export  const store=configureStore({
//     reducer:{
//         counter:counterReducer

//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})