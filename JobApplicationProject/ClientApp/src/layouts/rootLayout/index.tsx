import React from 'react'
import { Outlet, useOutlet } from 'react-router-dom'

function RootLayout() {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default RootLayout
