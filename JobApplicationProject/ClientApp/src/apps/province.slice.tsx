import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createProvinceAPI, getAllProvinceAPI, getAllProvinceByCountryId, updateProvinceAPI } from 'apis/provinceAPI'
import { IProvinceModel } from 'models'
import { IPaginationModel } from 'models/paginationModel'
import { queryParams } from 'types'
import { toastError, toastSuccess } from 'utils/function'

export interface AddProvinceState {
    openAddProvince: boolean
    openEditProvince: boolean
    getListProvinceStatus: string
    getListProvinceError: string | null
    createProvinceStatus: string
    createProvinceError: string | null
    data: IProvinceModel[]
    paginationObject: IPaginationModel
    editProvince: IProvinceModel
    updateProvinceStatus: string
    updateProvinceError: string | null
    getProvinceByCountryIdStatus: string
    getProvinceByCountryIdError: string | null
    provinceByCountryId: IProvinceModel[]
}

const initialState: AddProvinceState = {
    openAddProvince: false,
    getListProvinceStatus: 'idle',
    getListProvinceError: null,
    data: [],
    paginationObject: {
        currentPage: 1,
        pageSize: 1,
        totalCount: 1,
        totalPages: 1,
        hasPrevious: false,
        hasNext: false
    },
    createProvinceStatus: 'idle',
    createProvinceError: null,
    openEditProvince: false,
    editProvince: {
        name: undefined,
        countryId: ''
    },
    updateProvinceStatus: 'idle',
    updateProvinceError: null,
    getProvinceByCountryIdStatus: 'idle',
    getProvinceByCountryIdError: null,
    provinceByCountryId: []
}
const createProvinceAsync = createAsyncThunk('Province/createProvince', async (body: IProvinceModel) => {
    const response = await createProvinceAPI(body)
    return response.data
})
const updateProvinceAsync = createAsyncThunk('Province/updateProvince', async (body: IProvinceModel) => {
    const response = await updateProvinceAPI(body)
    return response.data
})
const getAllProvinceAsync = createAsyncThunk('Province/getAllProvince', async (queryParams: queryParams) => {
    const response = await getAllProvinceAPI(queryParams)
    return response.data
})
const getProvinceByCountryIdAsync = createAsyncThunk('Province/getProvinceByCountryId', async (countryId: string) => {
    const response = await getAllProvinceByCountryId(countryId)
    return response.data
})
const provinceSlice = createSlice({
    name: 'addProvince',
    initialState: initialState,
    reducers: {
        setOpenAddProvince: (state, action: PayloadAction<boolean>) => {
            state.openAddProvince = action.payload
        },
        setOpenEditProvince: (state, action: PayloadAction<boolean>) => {
            state.openEditProvince = action.payload
        },
        setEditProvinceData: (state, action: PayloadAction<IProvinceModel>) => {
            state.editProvince = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProvinceAsync.pending, (state: any) => {
                state.createProvinceStatus = 'loading'
            })
            .addCase(createProvinceAsync.fulfilled, (state: any, action) => {
                state.createProvinceStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Tạo thành công')
            })
            .addCase(createProvinceAsync.rejected, (state, action) => {
                state.createProvinceStatus = 'failed'
                state.createProvinceError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            //
            .addCase(getAllProvinceAsync.pending, (state: any) => {
                state.getListProvinceStatus = 'loading'
            })
            .addCase(getAllProvinceAsync.fulfilled, (state: any, action) => {
                state.getListProvinceStatus = 'succeeded'
                state.data = action.payload.items
                state.paginationObject = action.payload.paginationInfo
            })
            .addCase(getAllProvinceAsync.rejected, (state, action) => {
                state.getListProvinceStatus = 'failed'
                state.getListProvinceError = action.error.message ?? null
            })
            ///
            .addCase(updateProvinceAsync.pending, (state: any) => {
                state.updateProvinceStatus = 'loading'
            })
            .addCase(updateProvinceAsync.fulfilled, (state: any, action) => {
                state.updateProvinceStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Chỉnh sửa thành công')
            })
            .addCase(updateProvinceAsync.rejected, (state, action) => {
                state.updateProvinceStatus = 'failed'
                state.updateProvinceError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            ///
            .addCase(getProvinceByCountryIdAsync.pending, (state: any) => {
                state.getProvinceByCountryIdStatus = 'loading'
            })
            .addCase(getProvinceByCountryIdAsync.fulfilled, (state: any, action) => {
                state.getProvinceByCountryIdStatus = 'succeeded'
                state.provinceByCountryId = action.payload
            })
            .addCase(getProvinceByCountryIdAsync.rejected, (state, action) => {
                state.getProvinceByCountryIdStatus = 'failed'
                state.getProvinceByCountryIdError = action.error.message ?? null
            })
    }
})

export const { setOpenAddProvince, setOpenEditProvince, setEditProvinceData } = provinceSlice.actions

export { getAllProvinceAsync, createProvinceAsync, updateProvinceAsync, getProvinceByCountryIdAsync }

export default provinceSlice.reducer
