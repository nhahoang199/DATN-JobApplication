interface IUserModel {
    name: string
    id?: string
    email: string
    password?: string
    dateOfBirth?: string
    role: string
    gender?: number
    companyId?: string
    companyName?: string
    companyAvatar?: string
    phoneNumber?: string
    profilePicture?: string
    status?: number
}

export type { IUserModel }
