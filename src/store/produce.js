import produceData from '../mockData/produce.json';
const POPULATE = "produce/POPULATE";

// action creator
export const populateProduce = produce => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

// reducer
export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:

            const produceList = {};
            action.produce.forEach((item) => {
                produceList[item.id] = item;
            })
            return produceList;
        default:
            return state;
    }
}





