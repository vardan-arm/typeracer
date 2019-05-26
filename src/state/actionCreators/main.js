export const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS';
export const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
export const GET_TEXT_FAILURE = 'GET_TEXT_FAILURE';
export const HANDLE_TEXT_CHANGE = 'HANDLE_TEXT_CHANGE';
export const CALCULATE_WPM = 'CALCULATE_WPM';
export const TIME_IS_UP = 'TIME_IS_UP';
export const SET_TYPING_ALLOWED = 'SET_TYPING_ALLOWED';
export const SET_PARAMS_AND_START = 'SET_PARAMS_AND_START';

// Actions are created using FSA approach (see more at https://github.com/redux-utilities/flux-standard-action)
export const doSetRequestInProgress = requestInProgress => ({
    type: REQUEST_IN_PROGRESS,
    payload: {
        requestInProgress
    }
});

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

export const doHandleTextChange = ({writtenText, wrongInput}) => ({
    type: HANDLE_TEXT_CHANGE,
    payload: {
        writtenText,
        wrongInput
    }
});

export const doCalculateWPM = (secondsPassed) => ({
    type: CALCULATE_WPM,
    payload: {
        secondsPassed
    }
});

export const doHandleTimeIsUp = () => ({
    type: TIME_IS_UP
});

export const doSetTypingAllowed = typingAllowed => ({
    type: SET_TYPING_ALLOWED,
    payload: {
        typingAllowed
    }
});

export const doSetParamsAndStart = duration => ({
    type: SET_PARAMS_AND_START,
    payload: {
        duration
    }
});