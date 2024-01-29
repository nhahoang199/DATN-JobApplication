// navBar.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITabActiveIem {
    companyActiveTab: number
    userManagerActiveTab: number
    hrManagerActiveTab: number
    adminSidebarActiveTab: number
}

const initialState: ITabActiveIem = {
    companyActiveTab: 0,
    userManagerActiveTab: 0,
    hrManagerActiveTab: 0,
    adminSidebarActiveTab: 0
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
        },
        setHRManagerTab: (state, action: PayloadAction<number>) => {
            state.hrManagerActiveTab = action.payload
        },
        setAdminSidebarTab: (state, action: PayloadAction<number>) => {
            state.adminSidebarActiveTab = action.payload
        }
    }
})

export const { setCompanyTab, setUserManagerTab, setHRManagerTab, setAdminSidebarTab } = activeTabSlice.actions

export default activeTabSlice.reducer
