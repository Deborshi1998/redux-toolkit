import { configureStore } from "@reduxjs/toolkit";
import parent from "./features/parentSlice";
import grandParent from "./features/grandparentSlice";
import moviesSlice from "./features/moviesSlice";
const centralStore = configureStore({ //Central store
    reducer: {                                //Reducer
        parent,                              //Parent reducer         
        grandParent,                         //GrandParent reducer
        moviesSlice
    }
});

export default centralStore;