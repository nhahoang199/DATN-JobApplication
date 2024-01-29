import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserProfileState {
    openEditUser: boolean
    openCreateHR: boolean
    openEditHR: boolean
}

const initialState: UserProfileState = {
    openEditUser: false,
    openCreateHR: false,
    openEditHR: false
}

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: initialState,
    reducers: {
        setOpenEditUser: (state, action: PayloadAction<boolean>) => {
            state.openEditUser = action.payload
        },
        setOpenEditHR: (state, action: PayloadAction<boolean>) => {
            state.openEditHR = action.payload
        },
        setOpenCreateHR: (state, action: PayloadAction<boolean>) => {
            state.openCreateHR = action.payload
        }
    }
})

export const { setOpenEditUser, setOpenEditHR, setOpenCreateHR } = userProfileSlice.actions

export default userProfileSlice.reducer
