interface IProvinceModel {
    id?: string
    name: string | undefined
    countryId: string
    countryName?:string
    // provinceId: string | undefined
    createdOn?: string
    updatedOn?: string
}

export type { IProvinceModel }
