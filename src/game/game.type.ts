export enum EGameType {
    ACTION,
    RPG,
    PLATEFORM,
}

export enum EPlateform {
    PS4,
    SWITCH,
}

export type TGame = {
    title: String,
    description: String,
    img: String,
    type: EGameType,
    platform: EPlateform,
    score: Number,
    price: Number,
}

export type TGameList = {
    data: Array<TGame>,
    pageNumber?: Number,
    pageSize?: Number
}