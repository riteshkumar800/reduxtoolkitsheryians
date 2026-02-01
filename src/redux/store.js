import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counterSlice";
import counterSlicereducer from "./features/counterSlice";

export  const store=configureStore({
    reducer:{
        counter:counterSlicereducer

    }
})