import { setHRManagerTab } from 'apps/Tabs.slice'
import { useAppDispatch } from 'apps/store'
import React, { useEffect } from 'react'
import { CompanyProfileSection, CompanyProfileTab } from './components'
import { ThemeProvider } from '@material-tailwind/react'
import {
    EditCompanyContactForm,
    EditCompanyInfoForm,
    EditCompanyIntroDrawerForm,
    EditCompanySkillDrawerForm,
    EditCompanyBenefitDrawerForm,
    EditCompanyBackgroundPicture,
    EditCompanyProfilePicture
} from 'components'
import AddAddressDrawerForm from 'components/addAddressDrawerForm'
import mtTheme, { mtThemeLayer2 } from 'const/MTtheme'

function CompanyProfilePage() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setHRManagerTab(2))
    }, [dispatch])
    return (
        <>
            <div className='gap-y-5 flex flex-col'>
                <CompanyProfileSection />
                <CompanyProfileTab />
            </div>
            <ThemeProvider value={mtTheme}>
                <EditCompanyInfoForm />
                <EditCompanyIntroDrawerForm />
                <EditCompanySkillDrawerForm />
                <EditCompanyBenefitDrawerForm />
                <EditCompanyContactForm />
                <EditCompanyProfilePicture />
                <EditCompanyBackgroundPicture />
            </ThemeProvider>
            <ThemeProvider value={mtThemeLayer2}>
                <AddAddressDrawerForm />
            </ThemeProvider>
        </>
    )
}

export default CompanyProfilePage
