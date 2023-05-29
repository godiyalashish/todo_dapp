import { createSlice } from "@reduxjs/toolkit";

const WalletSlice = createSlice({
    name:'wallet',
    initialState:{
        wallet:[]
    },
reducers:{
    addWallet(state, action){
        state.wallet.push(action.payload);
    },
}
});

export const{addWallet} = WalletSlice.actions;
export default WalletSlice.reducer