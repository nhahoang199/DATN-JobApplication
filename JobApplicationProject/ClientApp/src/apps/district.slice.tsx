import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    createDistrictAPI,
    getAllDistrictAPI,
    getDistrictByProvinceIdAPI,
    getDistrictDetailsAPI,
    updateDistrictAPI
} from 'apis/districtAPI'
import { queryParams } from 'types'
import { IDistrictDetailsModel, IDistrictModel } from 'models'
import { IPaginationModel } from 'models/paginationModel'
import { toastSuccess, toastError } from 'utils/function'

export interface AddDistrictState {
    openAddDistrict: boolean
    openEditDistrict: boolean
    getListDistrictStatus: string
    getListDistrictError: string | null
    createDistrictStatus: string
    createDistrictError: string | null
    data: IDistrictModel[]
    paginationObject: IPaginationModel
    editDistrictId: string
    editDistrictData: IDistrictDetailsModel
    updateDistrictStatus: string
    updateDistrictError: string | null
    getDistrictDetailsStatus: string
    getDistrictDetailsError: string | null
    getDistrictByProvinceIdStatus: string
    getDistrictByProvinceIdError: string | null
    districtByProvinceId: IDistrictModel[]
}

const initialState: AddDistrictState = {
    openAddDistrict: false,
    openEditDistrict: false,
    getListDistrictStatus: 'idle',
    getListDistrictError: null,
    createDistrictStatus: 'idle',
    createDistrictError: null,
    data: [],
    editDistrictId: '',
    editDistrictData: {
        name: undefined,
        provinceId: '',
        countryId: ''
    },
    paginationObject: {
        currentPage: 1,
        pageSize: 1,
        totalCount: 1,
        totalPages: 1,
        hasPrevious: false,
        hasNext: false
    },
    updateDistrictStatus: 'idle',
    updateDistrictError: null,
    getDistrictDetailsStatus: 'idle',
    getDistrictDetailsError: null,
    getDistrictByProvinceIdStatus: 'idle',
    getDistrictByProvinceIdError: null,
    districtByProvinceId: []
}
const getAllDistrictAsync = createAsyncThunk('District/getAllDistrict', async (queryParams: queryParams) => {
    const response = await getAllDistrictAPI(queryParams)
    return response.data
})
const getDistrictByProvinceIdAsync = createAsyncThunk(
    'District/getDistrictByProvinceId',
    async (provinceId: string) => {
        const response = await getDistrictByProvinceIdAPI(provinceId)
        return response.data
    }
)
const getDistrictDetailsAsync = createAsyncThunk('District/getDistrictDetails', async (id: string) => {
    const response = await getDistrictDetailsAPI(id)
    return response.data
})
const createDistrictAsync = createAsyncThunk('District/createDistrict', async (body: IDistrictModel) => {
    const response = await createDistrictAPI(body)
    return response.data
})
const updateDistrictAsync = createAsyncThunk('District/updateDistrict', async (body: IDistrictModel) => {
    const response = await updateDistrictAPI(body)
    return response.data
})
const districtSlice = createSlice({
    name: 'addDistrict',
    initialState: initialState,
    reducers: {
        setOpenAddDistrict: (state, action: PayloadAction<boolean>) => {
            state.openAddDistrict = action.payload
        },
        setOpenEditDistrict: (state, action: PayloadAction<boolean>) => {
            state.openEditDistrict = action.payload
        },
        setEditDistrictId: (state, action: PayloadAction<string>) => {
            state.editDistrictId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createDistrictAsync.pending, (state: any) => {
                state.createDistrictStatus = 'loading'
            })
            .addCase(createDistrictAsync.fulfilled, (state: any, action) => {
                state.createDistrictStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Tạo thành công')
            })
            .addCase(createDistrictAsync.rejected, (state, action) => {
                state.createDistrictStatus = 'failed'
                state.createDistrictError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            ///
            .addCase(getAllDistrictAsync.pending, (state: any) => {
                state.getListDistrictStatus = 'loading'
            })
            .addCase(getAllDistrictAsync.fulfilled, (state: any, action) => {
                state.getListDistrictStatus = 'succeeded'
                state.data = action.payload.items
                state.paginationObject = action.payload.paginationInfo
            })
            .addCase(getAllDistrictAsync.rejected, (state, action) => {
                state.getListDistrictStatus = 'failed'
                state.getListDistrictError = action.error.message ?? null
            })
            ///
            .addCase(getDistrictDetailsAsync.pending, (state: any) => {
                state.getDistrictDetailsStatus = 'loading'
            })
            .addCase(getDistrictDetailsAsync.fulfilled, (state: any, action) => {
                state.getDistrictDetailsStatus = 'succeeded'
                state.editDistrictData = action.payload
            })
            .addCase(getDistrictDetailsAsync.rejected, (state, action) => {
                state.getDistrictDetailsStatus = 'failed'
                state.getDistrictDetailsError = action.error.message ?? null
            })
            ///
            .addCase(updateDistrictAsync.pending, (state: any) => {
                state.updateDistrictStatus = 'loading'
            })
            .addCase(updateDistrictAsync.fulfilled, (state: any, action) => {
                state.updateDistrictStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Chỉnh sửa thành công')
            })
            .addCase(updateDistrictAsync.rejected, (state, action) => {
                state.updateDistrictStatus = 'failed'
                state.updateDistrictError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            ///
            .addCase(getDistrictByProvinceIdAsync.pending, (state: any) => {
                state.getDistrictByProvinceIdStatus = 'loading'
            })
            .addCase(getDistrictByProvinceIdAsync.fulfilled, (state: any, action) => {
                state.getDistrictByProvinceIdStatus = 'succeeded'
                state.districtByProvinceId = action.payload
            })
            .addCase(getDistrictByProvinceIdAsync.rejected, (state, action) => {
                state.getDistrictByProvinceIdStatus = 'failed'
                state.getDistrictByProvinceIdError = action.error.message ?? null
            })
    }
})

export const { setOpenAddDistrict, setOpenEditDistrict, setEditDistrictId } = districtSlice.actions

export default districtSlice.reducer

export {
    getAllDistrictAsync,
    createDistrictAsync,
    getDistrictDetailsAsync,
    updateDistrictAsync,
    getDistrictByProvinceIdAsync
}
