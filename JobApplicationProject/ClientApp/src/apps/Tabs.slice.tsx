// navBar.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITabActiveIem {
    companyActiveTab: number
    userManagerActiveTab: number
}

const initialState: ITabActiveIem = {
    companyActiveTab: 0,
    userManagerActiveTab: 0
}

const activeTabSlice = createSlice({
    name: 'activeTabs',
    initialState: initialState,
    reducers: {
        setCompanyTab: (state, action: PayloadAction<number>) => {
            state.companyActiveTab = action.payload
        },
        setUserManagerTab: (state, action: PayloadAction<number>) => {
            state.userManagerActiveTab = action.payload
        }
    }
})

export const { setCompanyTab, setUserManagerTab } = activeTabSlice.actions

export default activeTabSlice.reducer
