import {
    GET_TEXT_SUCCESS,
    GET_TEXT_FAILURE,
    HANDLE_TEXT_CHANGE, CALCULATE_WPM
} from "../actionCreators/main";

const initialState = {
    originalText: '',
    caretPositionInOriginalText: 0,
    error: '',
    shouldGetNewText: true,
    writtenText: '',
    wpm: 0
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
        case CALCULATE_WPM:
            const typedWordsNumber = state.caretPositionInOriginalText / 5;
            const wordsPerSecond = typedWordsNumber / action.payload.secondsPassed;

            return {
                ...state,
                wpm: parseInt(wordsPerSecond * 60)
            };
        default:
            return state;
    }
};