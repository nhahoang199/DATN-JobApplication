import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AddAddressState {
    openAddAddress: boolean
}

const initialState: AddAddressState = {
    openAddAddress: false
}

const addressSlice = createSlice({
    name: 'addAddress',
    initialState: initialState,
    reducers: {
        setOpenAddAddress: (state, action: PayloadAction<boolean>) => {
            state.openAddAddress = action.payload
        }
    }
})

export const { setOpenAddAddress } = addressSlice.actions

export default addressSlice.reducer
