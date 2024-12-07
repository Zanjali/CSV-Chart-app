import { LOAD_DATA, LOAD_DATA_ERROR } from './actions';

const initialState = {
    data: [],
    error: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            console.log('Data loaded:', action.payload); // Debugging line
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        case LOAD_DATA_ERROR:
            console.error('Data load error:', action.payload); // Debugging line
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
