import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createUserAPI, getAllUserAPI } from 'apis/userAPI'
import { IUserModel } from 'models'
import { toastSuccess, toastError } from 'utils/function'
import { queryParams } from 'types'
import { IPaginationModel } from 'models/paginationModel'

export interface HRUserState {
    openEditHR: boolean
    openCreateHR: boolean
    createUserStatus: string
    createUserError: string
    getListUserStatus: string
    getListUserError: string
    data: IUserModel[]
    paginationObject: IPaginationModel
    editUser: IUserModel
}

const initialState: HRUserState = {
    openEditHR: false,
    openCreateHR: false,
    createUserStatus: '',
    createUserError: '',
    getListUserStatus: '',
    getListUserError: '',
    data: [],
    paginationObject: {
        currentPage: 1,
        pageSize: 1,
        totalCount: 1,
        totalPages: 1,
        hasPrevious: false,
        hasNext: false
    },
    editUser: {
        name: '',
        email: '',
        role: '',
        dateOfBirth: undefined,
        phoneNumber: '',
        gender: undefined
    }
}

const createUserAsync = createAsyncThunk('User/createUser', async (body: IUserModel) => {
    const response = await createUserAPI(body)
    return response.data
})
const getAllUserAsync = createAsyncThunk('User/getAllUser', async (queryParams: queryParams) => {
    const response = await getAllUserAPI(queryParams)
    return response.data
})
const hrUserSlice = createSlice({
    name: 'HRUser',
    initialState: initialState,
    reducers: {
        setOpenAdminEditHR: (state, action: PayloadAction<boolean>) => {
            state.openEditHR = action.payload
        },

        setOpenAdminCreateHR: (state, action: PayloadAction<boolean>) => {
            state.openCreateHR = action.payload
        },
        setEditHRData: (state, action: PayloadAction<IUserModel>) => {
            state.editUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.pending, (state: any) => {
                state.createUserStatus = 'loading'
            })
            .addCase(createUserAsync.fulfilled, (state: any, action) => {
                state.createUserStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Tạo người dùng thành công')
            })
            .addCase(createUserAsync.rejected, (state, action) => {
                state.createUserStatus = 'failed'
                state.createUserError = action.error.message ?? ''
                toastError('Có lỗi xảy ra')
            })
            //
            .addCase(getAllUserAsync.pending, (state: any) => {
                state.getListUserStatus = 'loading'
            })
            .addCase(getAllUserAsync.fulfilled, (state: any, action) => {
                state.getListUserStatus = 'succeeded'
                state.data = action.payload.items
                state.paginationObject = action.payload.paginationInfo
            })
            .addCase(getAllUserAsync.rejected, (state, action) => {
                state.getListUserStatus = 'failed'
                state.getListUserError = action.error.message ?? ''
            })
        // .addCase(getUserDetailsAsync.pending, (state: any) => {
        //     state.getUserDetailsStatus = 'loading'
        // })
        // .addCase(getUserDetailsAsync.fulfilled, (state: any, action) => {
        //     state.getUserDetailsStatus = 'succeeded'
        //     state.editUserData = action.payload
        // })
        // .addCase(getUserDetailsAsync.rejected, (state, action) => {
        //     state.getUserDetailsStatus = 'failed'
        //     state.getUserDetailsError = action.error.message ?? null
        // })
        // //
        // .addCase(updateUserAsync.pending, (state: any) => {
        //     state.updateUserStatus = 'loading'
        // })
        // .addCase(updateUserAsync.fulfilled, (state: any, action) => {
        //     state.updateUserStatus = 'succeeded'
        //     // state.data = action.payload
        //     toastSuccess('Chỉnh sửa thành công')
        // })
        // .addCase(updateUserAsync.rejected, (state, action) => {
        //     state.updateUserStatus = 'failed'
        //     state.updateUserError = action.error.message ?? null
        //     toastError('Có lỗi xảy ra')
        // })
        // .addCase(activateUserAsync.pending, (state: any) => {
        //     state.activateUserStatus = 'loading'
        // })
        // .addCase(activateUserAsync.fulfilled, (state: any, action) => {
        //     state.activateUserStatus = 'succeeded'
        //     // state.data = action.payload
        //     toastSuccess('Kích hoạt công ty thành công')
        // })
        // .addCase(activateUserAsync.rejected, (state, action) => {
        //     state.activateUserStatus = 'failed'
        //     state.activateUserError = action.error.message ?? null
        //     toastError('Có lỗi xảy ra')
        // })
        // .addCase(deactivateUserAsync.pending, (state: any) => {
        //     state.deactivateUserStatus = 'loading'
        // })
        // .addCase(deactivateUserAsync.fulfilled, (state: any, action) => {
        //     state.deactivateUserStatus = 'succeeded'
        //     // state.data = action.payload
        //     toastSuccess('Vô hiệu hóa công ty thành công')
        // })
        // .addCase(deactivateUserAsync.rejected, (state, action) => {
        //     state.deactivateUserStatus = 'failed'
        //     state.deactivateUserError = action.error.message ?? null
        //     toastError('Có lỗi xảy ra')
        // })
    }
})

export const { setOpenAdminEditHR, setOpenAdminCreateHR, setEditHRData } = hrUserSlice.actions

export default hrUserSlice.reducer

export { createUserAsync, getAllUserAsync }
