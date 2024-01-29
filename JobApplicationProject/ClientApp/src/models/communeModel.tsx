interface ICommuneModel {
    id?: string
    name: string | undefined
    districtId: string
    districtName?: string
    // districtId: string | undefined
    createdOn?: string
    updatedOn?: string
}
interface ICommuneDetailsModel {
    id?: string
    name: string | undefined
    districtId: string
    districtName?: string
    provinceId?: string
    countryId?: string
    createdOn?: string
    updatedOn?: string
}

export type { ICommuneModel, ICommuneDetailsModel }
