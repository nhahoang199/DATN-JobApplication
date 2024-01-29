import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createCommuneAPI, getAllCommuneAPI, getCommuneDetailsAPI, updateCommuneAPI } from 'apis/communeAPI'
import { ICommuneModel, ICommuneDetailsModel } from 'models'
import { queryParams } from 'types'
import { IPaginationModel } from 'models/paginationModel'
import { toastError, toastSuccess } from 'utils/function'

export interface AddCommuneState {
    openAddCommune: boolean
    openEditCommune: boolean
    getListCommuneStatus: string
    getListCommuneError: string | null
    createCommuneStatus: string
    createCommuneError: string | null
    data: ICommuneModel[]
    paginationObject: IPaginationModel
    editCommuneId: string
    editCommuneData: ICommuneDetailsModel
    updateCommuneStatus: string
    updateCommuneError: string | null
    getCommuneDetailsStatus: string
    getCommuneDetailsError: string | null
}

const initialState: AddCommuneState = {
    openAddCommune: false,
    openEditCommune: false,
    getListCommuneStatus: 'idle',
    getListCommuneError: null,
    createCommuneStatus: 'idle',
    createCommuneError: null,
    data: [],
    editCommuneId: '',
    editCommuneData: {
        name: undefined,
        districtId: '',
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
    updateCommuneStatus: 'idle',
    updateCommuneError: null,
    getCommuneDetailsStatus: 'idle',
    getCommuneDetailsError: null
}
const getAllCommuneAsync = createAsyncThunk('Commune/getAllCommune', async (queryParams: queryParams) => {
    const response = await getAllCommuneAPI(queryParams)
    return response.data
})
const getCommuneDetailsAsync = createAsyncThunk('District/getDistrictDetails', async (id: string) => {
    const response = await getCommuneDetailsAPI(id)
    return response.data
})
const createCommuneAsync = createAsyncThunk('Commune/createCommune', async (body: ICommuneModel) => {
    const response = await createCommuneAPI(body)
    return response.data
})
const updateCommuneAsync = createAsyncThunk('Commune/updateCommune', async (body: ICommuneModel) => {
    const response = await updateCommuneAPI(body)
    return response.data
})
const communeSlice = createSlice({
    name: 'addCommune',
    initialState: initialState,
    reducers: {
        setOpenAddCommune: (state, action: PayloadAction<boolean>) => {
            state.openAddCommune = action.payload
        },
        setOpenEditCommune: (state, action: PayloadAction<boolean>) => {
            state.openEditCommune = action.payload
        },
        setEditCommuneId: (state, action: PayloadAction<string>) => {
            state.editCommuneId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCommuneAsync.pending, (state: any) => {
                state.createCommuneStatus = 'loading'
            })
            .addCase(createCommuneAsync.fulfilled, (state: any, action) => {
                state.createCommuneStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Tạo thành công')
            })
            .addCase(createCommuneAsync.rejected, (state, action) => {
                state.createCommuneStatus = 'failed'
                state.createCommuneError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            //
            .addCase(getAllCommuneAsync.pending, (state: any) => {
                state.getListCommuneStatus = 'loading'
            })
            .addCase(getAllCommuneAsync.fulfilled, (state: any, action) => {
                state.getListCommuneStatus = 'succeeded'
                state.data = action.payload.items
                state.paginationObject = action.payload.paginationInfo
            })
            .addCase(getAllCommuneAsync.rejected, (state, action) => {
                state.getListCommuneStatus = 'failed'
                state.getListCommuneError = action.error.message ?? null
            })
            .addCase(getCommuneDetailsAsync.pending, (state: any) => {
                state.getCommuneDetailsStatus = 'loading'
            })
            .addCase(getCommuneDetailsAsync.fulfilled, (state: any, action) => {
                state.getCommuneDetailsStatus = 'succeeded'
                state.editCommuneData = action.payload
            })
            .addCase(getCommuneDetailsAsync.rejected, (state, action) => {
                state.getCommuneDetailsStatus = 'failed'
                state.getCommuneDetailsError = action.error.message ?? null
            })
            //
            .addCase(updateCommuneAsync.pending, (state: any) => {
                state.updateCommuneStatus = 'loading'
            })
            .addCase(updateCommuneAsync.fulfilled, (state: any, action) => {
                state.updateCommuneStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Chỉnh sửa thành công')
            })
            .addCase(updateCommuneAsync.rejected, (state, action) => {
                state.updateCommuneStatus = 'failed'
                state.updateCommuneError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
    }
})

export const { setOpenAddCommune, setOpenEditCommune, setEditCommuneId } = communeSlice.actions

export default communeSlice.reducer

export { getAllCommuneAsync, createCommuneAsync, getCommuneDetailsAsync, updateCommuneAsync }
