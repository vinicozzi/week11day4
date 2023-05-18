const ADD = "ADD"

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD:
            // const newState = {
            //    return {...state, cart: {[state.cart]: { id: produceId, count: 1 } }
            return {
                ...state, cart: {
                    [action.produceId]: {
                        id: action.produceId,
                        count: 1
                    }
                }
            }
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