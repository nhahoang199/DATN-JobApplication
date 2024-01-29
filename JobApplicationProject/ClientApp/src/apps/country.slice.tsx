import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createCountryAPI, getAllCountryAPI, getListInputCountryAPI, updateCountryAPI } from 'apis/countryAPI'
import { queryParams } from 'types'
import { ICountryModel } from 'models'
import { toastError, toastSuccess } from 'utils/function'
import { IPaginationModel } from 'models/paginationModel'

export interface CountryState {
    openAddCountry: boolean
    createCountryStatus: string
    createCountryError: string | null
    openEditCountry: boolean
    updateCountryStatus: string
    updateCountryError: string | null
    getListCountryStatus: string
    getListCountryError: string | null
    data: ICountryModel[]
    getInputCountryStatus: string
    getInputCountryError: string | null
    inputCountryData: ICountryModel[]
    editCountry: ICountryModel
    paginationObject: IPaginationModel
}

const initialState: CountryState = {
    openAddCountry: false,
    data: [],
    createCountryStatus: 'idle',
    createCountryError: null,
    getListCountryStatus: 'idle',
    getListCountryError: null,
    openEditCountry: false,
    updateCountryStatus: 'idle',
    updateCountryError: null,
    editCountry: {
        name: undefined,
        countryCode: undefined,
        countryISOCode: undefined
    },
    paginationObject: {
        currentPage: 1,
        pageSize: 1,
        totalCount: 1,
        totalPages: 1,
        hasPrevious: false,
        hasNext: false
    },
    getInputCountryStatus: '',
    getInputCountryError: null,
    inputCountryData: []
}
const createCountryAsync = createAsyncThunk('Country/createCountry', async (body: ICountryModel) => {
    const response = await createCountryAPI(body)
    return response.data
})
const updateCountryAsync = createAsyncThunk('Country/updateCountry', async (body: ICountryModel) => {
    const response = await updateCountryAPI(body)
    return response.data
})
const getAllCountryAsync = createAsyncThunk('Country/getAllCountry', async (queryParams: queryParams) => {
    const response = await getAllCountryAPI(queryParams)
    return response.data
})
const getListInputCountryAsync = createAsyncThunk('Country/getListInputCountry', async () => {
    const response = await getListInputCountryAPI()
    return response.data
})
const countrySlice = createSlice({
    name: 'Country',
    initialState: initialState,
    reducers: {
        setOpenAddCountry: (state, action: PayloadAction<boolean>) => {
            state.openAddCountry = action.payload
        },
        setEditCountry: (state, action: PayloadAction<ICountryModel>) => {
            state.editCountry = action.payload
        },
        setOpenEditCountry: (state, action: PayloadAction<boolean>) => {
            state.openEditCountry = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCountryAsync.pending, (state: any) => {
                state.createCountryStatus = 'loading'
            })
            .addCase(createCountryAsync.fulfilled, (state: any, action) => {
                state.createCountryStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Tạo quốc gia thành công')
            })
            .addCase(createCountryAsync.rejected, (state, action) => {
                state.createCountryStatus = 'failed'
                state.createCountryError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            .addCase(getAllCountryAsync.pending, (state: any) => {
                state.getListCountryStatus = 'loading'
            })
            .addCase(getAllCountryAsync.fulfilled, (state: any, action) => {
                state.getListCountryStatus = 'succeeded'
                state.data = action.payload.items
                state.paginationObject = action.payload.paginationInfo
            })
            .addCase(getAllCountryAsync.rejected, (state, action) => {
                state.getListCountryStatus = 'failed'
                state.getListCountryError = action.error.message ?? null
            })
            .addCase(updateCountryAsync.pending, (state: any) => {
                state.updateCountryStatus = 'loading'
            })
            .addCase(updateCountryAsync.fulfilled, (state: any, action) => {
                state.updateCountryStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Chỉnh sửa thành công')
            })
            .addCase(updateCountryAsync.rejected, (state, action) => {
                state.updateCountryStatus = 'failed'
                state.updateCountryError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            .addCase(getListInputCountryAsync.pending, (state: any) => {
                state.getInputCountryStatus = 'loading'
            })
            .addCase(getListInputCountryAsync.fulfilled, (state: any, action) => {
                state.getInputCountryStatus = 'succeeded'
                state.inputCountryData = action.payload
            })
            .addCase(getListInputCountryAsync.rejected, (state, action) => {
                state.getInputCountryStatus = 'failed'
                state.getInputCountryError = action.error.message ?? null
            })
    }
})

export const { setOpenAddCountry, setEditCountry, setOpenEditCountry } = countrySlice.actions

export { createCountryAsync, getAllCountryAsync, updateCountryAsync, getListInputCountryAsync }

export default countrySlice.reducer
