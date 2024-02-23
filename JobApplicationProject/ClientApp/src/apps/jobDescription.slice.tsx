// reducer.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createJobAPI, getJobReferAPI } from 'apis/jobDescriptionAPI'
import { queryParams } from 'types'
import { IJobDescriptionModel } from 'models'
import { toastError, toastSuccess } from 'utils/function'

export interface JobDescriptionState {
    data: IJobDescriptionModel[]
    status: string
    error: string | null // Allow null for the error property
}
const initialState: JobDescriptionState = {
    data: [],
    status: 'idle',
    error: null
}
export interface createJobState {
    data: IJobDescriptionModel
    status: string
    error: string | null // Allow null for the error property
}
export const createJobInitialState: createJobState = {
    data: {
        id: null,
        companyName: null,
        companyId: null,
        districtId: null,
        districtName: null,
        provinceId: null,
        provinceName: null,
        createdOn: null,
        createdBy: null,
        description: null,
        expiredOn: null,
        expirence: null,
        gender: null,
        position: null,
        jobBenefit: null,
        jobRequired: null,
        quantity: null,
        minSalary: null,
        maxSalary: null,
        title: null,
        type: null,
        updatedOn: null
    },
    status: 'idle',
    error: null
}

// Định nghĩa một async thunk sử dụng createAsyncThunk
const fetchJobRefer = createAsyncThunk('jobDescription/fetchTopJobDescription', async (queryParams: queryParams) => {
    const response = await getJobReferAPI(queryParams)
    return response.data
})

const jobReferSlice = createSlice({
    name: 'fetchJobRefer',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobRefer.pending, (state: any) => {
                state.status = 'loading'
            })
            .addCase(fetchJobRefer.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchJobRefer.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? null
            })
    }
})

const createJobAsync = createAsyncThunk('jobDescription/createJob', async (body: IJobDescriptionModel) => {
    const response = await createJobAPI(body)
    return response.data
})
export const createJobSlice = createSlice({
    name: 'createJob',
    initialState: createJobInitialState,
    reducers: {
        setCreateJobData: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJobAsync.pending, (state: any) => {
                state.status = 'loading'
            })
            .addCase(createJobAsync.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
                state.data = action.payload
                toastSuccess('Tạo tin tuyển dụng thành công')
            })
            .addCase(createJobAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
    }
})
export const { setCreateJobData } = createJobSlice.actions
export default jobReferSlice.reducer
export { fetchJobRefer, createJobAsync }
