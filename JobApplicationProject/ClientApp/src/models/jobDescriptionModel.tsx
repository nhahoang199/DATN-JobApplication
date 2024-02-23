import { ICompanyModel } from './companyModel'

interface IJobDescriptionModel {
    id?: string | null
    companyName?: string | null
    companyId?: string | null
    districtId?: string | null
    districtName?: string | null
    provinceId?: string | null
    provinceName?: string | null
    createdOn?: string | null
    createdBy?: string | null
    description?: string | null
    jobRequired?: string | null
    jobBenefit?: string | null
    expiredOn?: string | null
    expirence?: number | null
    gender?: number | null
    position?: string | null
    quantity?: number | null
    minSalary?: number | null
    maxSalary?: number | null
    title: string | null
    type?: number | null
    updatedOn?: string | null
}
interface IJobDetail {
    addressId: string
    company: ICompanyModel
    companyId: string
    companyName: string
    description: string
    districtId: string
    districtName: string
    expirence: string
    expiredOn: string
    gender: string
    id: string
    position: string
    provinceId: string
    provinceName: string
    quantity: number
    salary: number
    title: string
    type: number
}

export type { IJobDescriptionModel, IJobDetail }
