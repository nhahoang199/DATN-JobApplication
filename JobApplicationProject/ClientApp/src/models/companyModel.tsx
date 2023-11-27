import { IAddressModel } from './addressModel'

interface ICompanyModel {
    id: string
    address: IAddressModel
    addressId: string
    companyName: string
    companyId: string
    companySize: string
    dateOfIncorporation: string
    districtId: string
    districtName: string
    description: string
    fbLink: string
    gmail: string
    name: string
    picture: string
    twitterLink: string
    uen: string
    website: string
    workingDay: string
    createdOn: string
    updatedOn: string
}

export type { ICompanyModel }
