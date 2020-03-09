export const ADD_ONE = "ADD_ONE";

export function addOneToCount(payload: number) {
    console.log("Action Called");
    return { type: ADD_ONE, payload }
};

