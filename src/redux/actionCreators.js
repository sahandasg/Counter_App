import {increment, decrement, reset} from "./actionsTypes";

export const counterIncrementAction = () => {
    return {
        type: increment,
    }
}
export const counterDecrementAction = () => {
    return {
        type: decrement,
    }
}

export const counterResetAction = () => {
    return {
        type: reset,
    }
}