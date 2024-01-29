interface ICountryModel {
    id?: string
    name: string | undefined
    countryCode: string | undefined
    countryISOCode: string | undefined
    createdOn?: string
    updatedOn?: string
}

export type { ICountryModel }
