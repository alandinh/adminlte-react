interface User {
    address: string
    role: string
}
export interface IToken {
    expires: string
    token: string
}
export interface ITokens {
    access: IToken
    refresh: IToken
}
export interface UserToken {
    user: User
    tokens: ITokens
    type: string
}

export interface Token {
    readonly address: string
    readonly symbol: string
}
