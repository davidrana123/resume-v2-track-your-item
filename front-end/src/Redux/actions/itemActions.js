import {ADD_COUNTER, MIN_COUNTER, RESET_COUNTER} from "./types";

export function addCounter(counter) {
    return {type: ADD_COUNTER, counter}
}

export function minCounter(counter) {
    return {type: MIN_COUNTER, counter}
}

export function resetCounter(counter) {
    return {type: RESET_COUNTER, counter}
}