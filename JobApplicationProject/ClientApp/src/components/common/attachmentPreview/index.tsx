import { XMarkIcon } from '@heroicons/react/24/outline'
import { DialogBody, IconButton, Dialog } from '@material-tailwind/react'
import { useResizeObserver } from '@wojtekmaj/react-hooks'
import { setOpenAttachmentPreview } from 'apps/dialog.slice'
import { RootState, useAppDispatch } from 'apps/store'
import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import cv from './cv.pdf'
import { Page, Document, pdfjs } from 'react-pdf'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import './index.scss'
// Create styles
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()
const resizeObserverOptions = {}

const maxWidth = 800
const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/'
}

type PDFFile = string | File | null
function AttachmentPreview() {
    const dispatch = useAppDispatch()
    const [file, setFile] = useState<PDFFile>(cv)
    const [numPages, setNumPages] = useState<number>(1)
    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages)
    }
    const openAttachmentPreview = useSelector((state: RootState) => state.dialogSlice.openAttachmentPreview)
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
    const [containerWidth, setContainerWidth] = useState<number>()

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries

        if (entry) {
            setContainerWidth(entry.contentRect.width)
        }
    }, [])

    useResizeObserver(containerRef, resizeObserverOptions, onResize)
    return (
        <Dialog
            // size='xl'
            open={openAttachmentPreview}
            handler={() => dispatch(setOpenAttachmentPreview(openAttachmentPreview))}
            className='p-0 '
        >
            <DialogBody className='relative !max-h-[calc(100vh-2.5rem)] overflow-hidden pr-2'>
                <Document
                    file={file}
                    renderMode='canvas'
                    onLoadSuccess={onDocumentLoadSuccess}
                    className='flex justify-center overflow-y-scroll scrollbar w-full !max-h-[calc(100vh-4.5rem)]'
                    options={options}
                >
                    <Page
                        pageNumber={numPages}
                        key={numPages}
                        className={'zxczxcz'}
                        width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                    />
                </Document>
                <IconButton
                    variant='text'
                    size='sm'
                    ripple={false}
                    className='absolute right-8 top-4 rounded-lg w-10 h-10 bg-gray-300 flex items-center justify-center cursor-pointer hover:scale-105 duration-200 hover:text-gray-900 z-20 hover:bg-gray-400'
                    onClick={() => dispatch(setOpenAttachmentPreview(false))}
                >
                    <XMarkIcon className='w-6 h-6 text-blue-gray-800' />
                </IconButton>
            </DialogBody>
        </Dialog>
    )
}

export default AttachmentPreview
