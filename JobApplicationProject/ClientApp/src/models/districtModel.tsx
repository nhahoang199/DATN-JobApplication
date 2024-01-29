interface IDistrictModel {
    id?: string
    name: string | undefined
    provinceId: string
    provinceName?: string
    // provinceId: string | undefined
    createdOn?: string
    updatedOn?: string
}
interface IDistrictDetailsModel {
    id?: string
    name: string | undefined
    provinceId: string
    provinceName?: string
    countryId: string
    createdOn?: string
    updatedOn?: string
}

export type { IDistrictModel, IDistrictDetailsModel }
