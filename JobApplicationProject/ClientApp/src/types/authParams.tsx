interface loginParams {
    email: string
    password: string
}
interface registerParams {
    email: string
    password: string
    confirmPassword: string
    roleLogicName: string
}

export type { loginParams, registerParams }
