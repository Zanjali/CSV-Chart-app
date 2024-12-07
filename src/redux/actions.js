export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_ERROR = 'LOAD_DATA_ERROR';

export const loadData = (data) => ({
    type: LOAD_DATA,
    payload: data,
});

export const loadDataError = (error) => ({
    type: LOAD_DATA_ERROR,
    payload: error,
});
