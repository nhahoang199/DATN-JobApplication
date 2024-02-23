// reducer.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createJobApplicationAPI, getAllJobApplicationAPI, getJobApplicationByIdAPI } from 'apis/jobApplicationAPI'
import { IJobApplicationModel } from 'models'
import { IPaginationModel } from 'models/paginationModel'
import { useNavigate } from 'react-router-dom'
import { queryParams } from 'types'
import { toastError, toastSuccess } from 'utils/function'

export interface JobApplicationState {
    createJobApplication: createJobState
    getAllJobApplication: getAllJobApplicationState
    getJobApplicationById: getJobApplicationByIdState
}
export interface createJobState {
    data: IJobApplicationModel
    status: string
    error: string | null // Allow null for the error property
}
export interface getAllJobApplicationState {
    data: IJobApplicationModel[]
    paginationObject: IPaginationModel
    status: string
    error: string | null // Allow null for the error property
}
export interface getJobApplicationByIdState {
    data: IJobApplicationModel
    status: string
    error: string | null // Allow null for the error property
}
export const createJobInitialState: createJobState = {
    data: {
        userId: null,
        jobDescriptionId: null
    },
    status: 'idle',
    error: null
}
const initialState: JobApplicationState = {
    createJobApplication: createJobInitialState,
    getAllJobApplication: {
        data: [],
        status: 'idle',
        error: null,
        paginationObject: {
            currentPage: 1,
            pageSize: 1,
            totalCount: 1,
            totalPages: 1,
            hasPrevious: false,
            hasNext: false
        }
    },
    getJobApplicationById: {
        data: {
            userId: null,
            jobDescriptionId: null
        },
        status: 'idle',
        error: null
    }
}

const createJobApplicationAsync = createAsyncThunk('JobApplication/createJob', async (body: IJobApplicationModel) => {
    const response = await createJobApplicationAPI(body)
    return response.data
})
const getAllJobApplicationAsync = createAsyncThunk(
    'JobApplication/getAllJobApplication',
    async (queryParams: queryParams) => {
        const response = await getAllJobApplicationAPI(queryParams)
        return response.data
    }
)
const getJobApplicationByIdAsync = createAsyncThunk('JobApplication/getJobApplicationById', async (id: string) => {
    const response = await getJobApplicationByIdAPI(id)
    return response.data
})
export const jobApplicationSlice = createSlice({
    name: 'jobApplication',
    initialState: initialState,
    reducers: {
        // setCreateJobApplicationData: (state, action) => {
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJobApplicationAsync.pending, (state: any) => {
                state.createJobApplication.status = 'loading'
            })
            .addCase(createJobApplicationAsync.fulfilled, (state: any, action) => {
                state.createJobApplication.status = 'succeeded'
                state.createJobApplication.data = action.payload
                toastSuccess('Gửi đơn ứng tuyển thành công')
            })
            .addCase(createJobApplicationAsync.rejected, (state, action) => {
                state.createJobApplication.status = 'failed'
                state.createJobApplication.error = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            .addCase(getAllJobApplicationAsync.pending, (state: any) => {
                state.getAllJobApplication.status = 'loading'
            })
            .addCase(getAllJobApplicationAsync.fulfilled, (state: any, action) => {
                state.getAllJobApplication.status = 'succeeded'
                state.getAllJobApplication.data = action.payload.items
                state.getAllJobApplication.paginationObject = action.payload.paginationInfo
            })
            .addCase(getAllJobApplicationAsync.rejected, (state, action) => {
                state.getAllJobApplication.status = 'failed'
                state.getAllJobApplication.error = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            .addCase(getJobApplicationByIdAsync.pending, (state: any) => {
                state.getJobApplicationById.status = 'loading'
            })
            .addCase(getJobApplicationByIdAsync.fulfilled, (state: any, action) => {
                state.getJobApplicationById.status = 'succeeded'
                state.getJobApplicationById.data = action.payload
            })
            .addCase(getJobApplicationByIdAsync.rejected, (state, action) => {
                state.getJobApplicationById.status = 'failed'
                state.getJobApplicationById.error = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
    }
})
export const {} = jobApplicationSlice.actions
export default jobApplicationSlice.reducer
export { createJobApplicationAsync, getAllJobApplicationAsync, getJobApplicationByIdAsync }
