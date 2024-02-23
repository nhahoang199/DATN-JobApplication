import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authSlice from './auth.slice'
import jobDescriptionSlice, { createJobSlice } from './jobDescription.slice'
import loadingSlice from './loading.slice'
import navBarSlice from './navBar.slice'
import companyTabsSlice from './Tabs.slice'
import userProfileSlice from './userProfile.slice'
import dialogSlice from './dialog.slice'
import companyProfileSlice from './companyProfile.slice'
import addressSlice from './addressForm.slice'
import countrySlice from './country.slice'
import provinceSlice from './province.slice'
import districtSlice from './district.slice'
import communeSlice from './commune.slice'
import hrUserSlice from './hrUser.slice'
import jobApplicationSlice from './jobApplication.slice'

export const store = configureStore({
    reducer: {
        jobDescription: jobDescriptionSlice,
        navigation: navBarSlice,
        auth: authSlice,
        loading: loadingSlice,
        activeTab: companyTabsSlice,
        createJob: createJobSlice.reducer,
        userProfile: userProfileSlice,
        companyProfileSlice: companyProfileSlice,
        addressSlice: addressSlice,
        dialogSlice: dialogSlice,
        countrySlice: countrySlice,
        provinceSlice: provinceSlice,
        districtSlice: districtSlice,
        communeSlice: communeSlice,
        hrUserSlice: hrUserSlice,
        jobApplicationSlice: jobApplicationSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
