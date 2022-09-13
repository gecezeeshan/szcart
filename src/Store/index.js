import { createSlice, configureStore } from '@reduxjs/toolkit';



const initialCheckoutState = {
 products : []
}

const checkOutSlice = createSlice({
 name: 'checkout',
 initialState : initialCheckoutState,
 reducers: {
    AddItem(state,action) {        
        state.products.push(action.payload);
    },
    RemoveItem(state,action) {
        state.products.splice(action.payload,1);
    }
 }
});



const initialProfileState = {
    profile : null
   }
   
   const profileSlice = createSlice({
    name: 'profile',
    initialState : initialProfileState,
    reducers: {
       Login(state,action) {        
           state.profile = action.payload;
       },
       Logout(state) {
           state.profile= null;
       }
    }
   });

const store = configureStore({
  reducer: {// counter: counterSlice.reducer, auth: authSlice.reducer,
      profile:   profileSlice.reducer,
     checkout : checkOutSlice.reducer },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export const checkoutActions = checkOutSlice.actions;
export const profileActions = profileSlice.actions;
export default store;