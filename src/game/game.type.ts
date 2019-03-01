export enum GameType {
    ACTION,
    RPG,
    PLATEFORM,
}

export enum Plateform {
    PS4,
    SWITCH,
}

export type Game = {
    title: String,
    description: String,
    img: String,
    type: GameType,
    platform: Plateform,
    score: Number,
    price: Number,
}