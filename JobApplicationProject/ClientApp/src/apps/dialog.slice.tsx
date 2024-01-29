import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DialogState {
    openPreviewImage: boolean
    openAttachmentPreview: boolean
    srcImage: string
}

const initialState: DialogState = {
    openPreviewImage: false,
    srcImage: '',
    openAttachmentPreview: false
}

const dialogSlice = createSlice({
    name: 'dialog',
    initialState: initialState,
    reducers: {
        setOpenPreviewImage: (state, action: PayloadAction<boolean>) => {
            state.openPreviewImage = action.payload
        },
        setSrcImage: (state, action: PayloadAction<string>) => {
            state.srcImage = action.payload
        },
        setOpenAttachmentPreview: (state, action: PayloadAction<boolean>) => {
            state.openAttachmentPreview = action.payload
        }
    }
})

export const { setOpenPreviewImage, setSrcImage, setOpenAttachmentPreview } = dialogSlice.actions

export default dialogSlice.reducer
