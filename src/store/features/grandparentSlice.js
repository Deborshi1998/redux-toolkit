import {createSlice} from '@reduxjs/toolkit';
const grandParentInitialState = {   //Initial state of grandParent
    grandParent: 'grandParent',
    text: 'grandParent Text '
}

const grandParent = createSlice({               //Slice of grandParent
    name: 'grandParent',                        //Name of slice
    initialState: grandParentInitialState,     //Initial state of grandParent
    reducers: {
        setGrandparent: (state, action) => {  //Reducer function to set the state of grandParent
            state.text = action.payload;
        }
    }
});

export const {setGrandparent} = grandParent.actions;    //Exporting the action
export default grandParent.reducer;                     //Exporting the reducer
export const grandParentText = state => state.grandParent.text; //Exporting the selector
