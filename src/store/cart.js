const ADD = "ADD"

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export const addToCart = produceId => {
    return {
        type: ADD,
        produceId
    }
}