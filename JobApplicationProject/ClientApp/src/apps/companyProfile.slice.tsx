import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createCompanyAPI, getAllCompanyAPI, updateCompanyAPI } from 'apis/companyAPI'
import { ICompanyModel } from 'models'
import { IPaginationModel } from 'models/paginationModel'
import { queryParams } from 'types'
import { toastError, toastSuccess } from 'utils/function'

export interface CompanyProfileState {
    openCreateCompany: boolean
    openEditCompany: boolean
    openAdminEditCompany: boolean
    openEditCompanyContact: boolean
    openEditCompanyIntro: boolean
    openEditCompanySkill: boolean
    openEditCompanyBenefit: boolean
    openEditProfileImage: boolean
    srcProfileImage: string
    openEditBackgroundImage: boolean
    srcBackgroundImage: string
    createCompanyStatus: string
    createCompanyError: string | null
    getListCompanyStatus: string
    getListCompanyError: string | null
    data: ICompanyModel[]
    paginationObject: IPaginationModel
    editCompanyId: string
    editCompanyData: ICompanyModel
    updateCompanyStatus: string
    updateCompanyError: string | null
    activateCompanyStatus: string
    activateCompanyError: string | null
    deactivateCompanyStatus: string
    deactivateCompanyError: string | null
}

const initialState: CompanyProfileState = {
    openCreateCompany: false,
    openEditCompany: false,
    openAdminEditCompany: false,
    openEditCompanyContact: false,
    openEditCompanyIntro: false,
    openEditCompanySkill: false,
    openEditCompanyBenefit: false,
    openEditProfileImage: false,
    srcProfileImage: '',
    openEditBackgroundImage: false,
    srcBackgroundImage: '',
    createCompanyStatus: '',
    createCompanyError: null,
    getListCompanyStatus: '',
    getListCompanyError: null,
    data: [],
    paginationObject: {
        currentPage: 1,
        pageSize: 1,
        totalCount: 1,
        totalPages: 1,
        hasPrevious: false,
        hasNext: false
    },
    editCompanyId: '',
    editCompanyData: {
        name: '',
        crn: '',
        email: '',
        dateOfIncorporation: null
    },
    updateCompanyStatus: '',
    updateCompanyError: null,
    activateCompanyStatus: '',
    activateCompanyError: null,
    deactivateCompanyStatus: '',
    deactivateCompanyError: null
}
const createCompanyAsync = createAsyncThunk('Company/createCompany', async (body: ICompanyModel) => {
    const response = await createCompanyAPI(body)
    return response.data
})
const updateCompanyAsync = createAsyncThunk('Company/updateCompany', async (body: ICompanyModel) => {
    const response = await updateCompanyAPI(body)
    return response.data
})
const activateCompanyAsync = createAsyncThunk('Company/activateCompany', async (id: string) => {
    const body = {
        id: id,
        status: 1
    }
    const response = await updateCompanyAPI(body)
    return response.data
})
const deactivateCompanyAsync = createAsyncThunk('Company/deactivateCompany', async (id: string) => {
    const body = {
        id: id,
        status: 2
    }
    const response = await updateCompanyAPI(body)
    return response.data
})
const getAllCompanyAsync = createAsyncThunk('Company/getAllCompany', async (queryParams: queryParams) => {
    const response = await getAllCompanyAPI(queryParams)
    return response.data
})
const companyProfileSlice = createSlice({
    name: 'CompanyProfile',
    initialState: initialState,
    reducers: {
        setOpenCreateCompany: (state, action: PayloadAction<boolean>) => {
            state.openCreateCompany = action.payload
        },
        setOpenEditCompany: (state, action: PayloadAction<boolean>) => {
            state.openEditCompany = action.payload
        },
        setOpenAdminEditCompany: (state, action: PayloadAction<boolean>) => {
            state.openAdminEditCompany = action.payload
        },
        setOpenEditCompanyContact: (state, action: PayloadAction<boolean>) => {
            state.openEditCompanyContact = action.payload
        },
        setOpenEditCompanyIntro: (state, action: PayloadAction<boolean>) => {
            state.openEditCompanyIntro = action.payload
        },
        setOpenEditCompanySkill: (state, action: PayloadAction<boolean>) => {
            state.openEditCompanySkill = action.payload
        },
        setOpenEditCompanyBenefit: (state, action: PayloadAction<boolean>) => {
            state.openEditCompanyBenefit = action.payload
        },
        setOpenEditProfileImage: (state, action: PayloadAction<boolean>) => {
            state.openEditProfileImage = action.payload
        },
        setSrcProfileImage: (state, action: PayloadAction<string>) => {
            state.srcProfileImage = action.payload
        },
        setOpenEditBackgroundImage: (state, action: PayloadAction<boolean>) => {
            state.openEditBackgroundImage = action.payload
        },
        setSrcBackgroundImage: (state, action: PayloadAction<string>) => {
            state.srcBackgroundImage = action.payload
        },
        setEditCompanyData: (state, action: PayloadAction<ICompanyModel>) => {
            state.editCompanyData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCompanyAsync.pending, (state: any) => {
                state.createCompanyStatus = 'loading'
            })
            .addCase(createCompanyAsync.fulfilled, (state: any, action) => {
                state.createCompanyStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Tạo thành công')
            })
            .addCase(createCompanyAsync.rejected, (state, action) => {
                state.createCompanyStatus = 'failed'
                state.createCompanyError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            //
            .addCase(getAllCompanyAsync.pending, (state: any) => {
                state.getListCompanyStatus = 'loading'
            })
            .addCase(getAllCompanyAsync.fulfilled, (state: any, action) => {
                state.getListCompanyStatus = 'succeeded'
                state.data = action.payload.items
                state.paginationObject = action.payload.paginationInfo
            })
            .addCase(getAllCompanyAsync.rejected, (state, action) => {
                state.getListCompanyStatus = 'failed'
                state.getListCompanyError = action.error.message ?? null
            })
            // .addCase(getCompanyDetailsAsync.pending, (state: any) => {
            //     state.getCompanyDetailsStatus = 'loading'
            // })
            // .addCase(getCompanyDetailsAsync.fulfilled, (state: any, action) => {
            //     state.getCompanyDetailsStatus = 'succeeded'
            //     state.editCompanyData = action.payload
            // })
            // .addCase(getCompanyDetailsAsync.rejected, (state, action) => {
            //     state.getCompanyDetailsStatus = 'failed'
            //     state.getCompanyDetailsError = action.error.message ?? null
            // })
            // //
            .addCase(updateCompanyAsync.pending, (state: any) => {
                state.updateCompanyStatus = 'loading'
            })
            .addCase(updateCompanyAsync.fulfilled, (state: any, action) => {
                state.updateCompanyStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Chỉnh sửa thành công')
            })
            .addCase(updateCompanyAsync.rejected, (state, action) => {
                state.updateCompanyStatus = 'failed'
                state.updateCompanyError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            .addCase(activateCompanyAsync.pending, (state: any) => {
                state.activateCompanyStatus = 'loading'
            })
            .addCase(activateCompanyAsync.fulfilled, (state: any, action) => {
                state.activateCompanyStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Kích hoạt công ty thành công')
            })
            .addCase(activateCompanyAsync.rejected, (state, action) => {
                state.activateCompanyStatus = 'failed'
                state.activateCompanyError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
            .addCase(deactivateCompanyAsync.pending, (state: any) => {
                state.deactivateCompanyStatus = 'loading'
            })
            .addCase(deactivateCompanyAsync.fulfilled, (state: any, action) => {
                state.deactivateCompanyStatus = 'succeeded'
                // state.data = action.payload
                toastSuccess('Vô hiệu hóa công ty thành công')
            })
            .addCase(deactivateCompanyAsync.rejected, (state, action) => {
                state.deactivateCompanyStatus = 'failed'
                state.deactivateCompanyError = action.error.message ?? null
                toastError('Có lỗi xảy ra')
            })
    }
})

export const {
    setOpenEditCompany,
    setOpenEditCompanyContact,
    setOpenEditCompanyIntro,
    setSrcProfileImage,
    setOpenEditProfileImage,
    setOpenEditBackgroundImage,
    setSrcBackgroundImage,
    setOpenEditCompanySkill,
    setOpenEditCompanyBenefit,
    setOpenCreateCompany,
    setOpenAdminEditCompany,
    setEditCompanyData
} = companyProfileSlice.actions

export default companyProfileSlice.reducer

export { createCompanyAsync, getAllCompanyAsync, updateCompanyAsync, activateCompanyAsync, deactivateCompanyAsync }
