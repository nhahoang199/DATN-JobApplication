import { ThemeProvider } from '@material-tailwind/react'
import { EditCompanyProfilePicture, EditCompanyBackgroundPicture } from 'components'
import { AttachmentPreview, PreviewImage } from 'components/common'
import mtTheme from 'const/MTtheme'
import React from 'react'

function DialogContainer() {
    return (
        <>
            <ThemeProvider value={mtTheme}>
                <AttachmentPreview />
                <PreviewImage />
                <EditCompanyProfilePicture />
                <EditCompanyBackgroundPicture />
            </ThemeProvider>
        </>
    )
}

export default DialogContainer
