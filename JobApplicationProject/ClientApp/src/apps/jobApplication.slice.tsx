// reducer.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getJobRefer } from 'apis/jobApplicationAPI'
import { queryParams } from 'types'
import { IJobApplicationModel } from 'models'

export interface JobApplicationState {
    data: IJobApplicationModel[]
    status: string
    error: string | null // Allow null for the error property
}
const initialState: JobApplicationState = {
    data: [],
    status: 'idle',
    error: null
}
// Định nghĩa một async thunk sử dụng createAsyncThunk
const fetchJobRefer = createAsyncThunk('jobApplication/fetchTopJobApplication', async (queryParams: queryParams) => {
    const response = await getJobRefer(queryParams)
    return response.data
})

const jobApplicationSlice = createSlice({
    name: 'jobApplication',
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

export default jobApplicationSlice.reducer
export { fetchJobRefer }
