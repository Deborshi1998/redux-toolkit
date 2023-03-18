import { createSlice } from "@reduxjs/toolkit";

const parentInitialState = {                     //Initial state of parent
  parent: "parent",
  color: "lightblue",
};

const parent = createSlice({                    //Slice of parent
    name: "parent",                             //Name of slice
    initialState: parentInitialState,           //Initial state of parent
    reducers: {                                 //Reducer function to set the state of parent
        setParent: (state, action) => {
            state.color = action.payload;
        }
    }
});

export const { setParent } = parent.actions;   //Exporting the action      
export default parent.reducer;                  //Exporting the reducer
export const parentColor = state => state.parent.color; //Exporting the selector