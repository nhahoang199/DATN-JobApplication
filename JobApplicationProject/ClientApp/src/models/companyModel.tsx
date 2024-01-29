import { Dayjs } from 'dayjs'
import { IAddressModel } from './addressModel'

interface ICompanyModel {
    id?: string
    address?: IAddressModel
    addressId?: string
    companyName?: string
    companyId?: string
    companySize?: string
    dateOfIncorporation?: string | null
    districtId?: string
    districtName?: string
    description?: string
    fbLink?: string
    email?: string | undefined
    name?: string | undefined
    picture?: string
    twitterLink?: string
    crn?: string | undefined
    website?: string
    workingDay?: string
    createdOn?: string
    updatedOn?: string
    status?: number
}

export type { ICompanyModel }
