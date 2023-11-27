// navBar.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NavigationItem {
    name: string
    href: string
    current: boolean
}

const initialState: NavigationItem[] = [
    { name: 'Việc làm', href: 'jobs', current: false },
    // { name: 'Hồ sơ & CV', href: '#', current: false },
    { name: 'Công ty', href: 'company', current: false }
]

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: initialState,
    reducers: {
        setNavigation: (state, action: PayloadAction<number>) => {
            const clickedIndex = action.payload
            return state.map((item, index) => ({
                ...item,
                current: index === clickedIndex
            }))
        }
    }
})

export const { setNavigation } = navigationSlice.actions

export default navigationSlice.reducer
