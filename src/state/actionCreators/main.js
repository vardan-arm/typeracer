export const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
export const GET_TEXT_FAILURE = 'GET_TEXT_FAILURE';
export const HANDLE_TEXT_CHANGE = 'HANDLE_TEXT_CHANGE';

// For actions the FSA-like approach is used (see more at https://github.com/redux-utilities/flux-standard-action)
export const doGetTextSuccess = text => ({
    type: GET_TEXT_SUCCESS,
    payload: {
        text
    }
});

export const doGetTextFailure = error => ({
    type: GET_TEXT_FAILURE,
    payload: new Error(error),
    error: true
});

export const doHandleTextChange = writtenText => ({
    type: HANDLE_TEXT_CHANGE,
    payload: {
        writtenText
    }
})