import {
    GET_TEXT_SUCCESS,
    GET_TEXT_FAILURE,
    HANDLE_TEXT_CHANGE
} from "../actionCreators/main";

const initialState = {
    originalText: '',
    caretPositionInOriginalText: 0,
    error: '',
    shouldGetNewText: true,
    writtenText: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEXT_SUCCESS:
            return {
                ...state,
                originalText: action.payload.text,
                shouldGetNewText: false,
            };
        case GET_TEXT_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                shouldGetNewText: false,
            };
        case HANDLE_TEXT_CHANGE:
            const { caretPositionInOriginalText } = state;
            const { writtenText, wrongInput } = action.payload;
            return {
                ...state,
                writtenText,
                wrongInput,
                caretPositionInOriginalText: wrongInput ? caretPositionInOriginalText : caretPositionInOriginalText + 1
            };
        default:
            return state;
    }
};