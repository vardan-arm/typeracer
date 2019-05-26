import {
    REQUEST_IN_PROGRESS,
    GET_TEXT_SUCCESS,
    GET_TEXT_FAILURE,
    HANDLE_TEXT_CHANGE,
    CALCULATE_WPM,
    TIME_IS_UP,
    SET_TYPING_ALLOWED,
    SET_TRY_AGAIN,
    SET_DURATION,
    SET_SHOW_HISTORY_ITEMS_SECTION,
    SET_HISTORY_DATA,
} from "../actionCreators/main";
import {defaultDuration} from "../../components/constants";

const initialState = {
    showSettingsSection: true,
    requestInProgress: false,
    typingAllowed: false,
    originalText: '',
    caretPositionInOriginalText: 0,
    error: '',
    shouldGetNewText: true,
    writtenText: '',
    wpm: 0,
    completionPercent: 0,
    showResults: false,
    duration: defaultDuration,
    showHistoryItemsSection: false,
    historyItems: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_IN_PROGRESS:
            return {
                ...state,
                requestInProgress: action.payload.requestInProgress
            };
        case GET_TEXT_SUCCESS:
            return {
                ...state,
                originalText: action.payload.text,
                shouldGetNewText: false,
                requestInProgress: false,
            };
        case GET_TEXT_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                shouldGetNewText: false,
                requestInProgress: false,
            };
        case HANDLE_TEXT_CHANGE:
            const {caretPositionInOriginalText} = state;
            const {writtenText, wrongInput} = action.payload;
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
        case TIME_IS_UP:
            return {
                ...state,
                showResults: true,
                typingAllowed: false,
                completionPercent: (state.caretPositionInOriginalText / state.originalText.length * 100).toFixed(1)
            };
        case SET_TYPING_ALLOWED:
            return {
                ...state,
                typingAllowed: action.payload.typingAllowed,
                showSettingsSection: !action.payload.typingAllowed,
                historyItems: []
            };
        case SET_DURATION:
            return {
                ...state,
                duration: action.payload.duration
            };
        case SET_TRY_AGAIN:
            return {
                ...state,
                showSettingsSection: true,
                showResults: false,
                shouldGetNewText: true,
                caretPositionInOriginalText: 0,
                writtenText: '',
                wpm: 0,
                completionPercent: 0,
                wrongInput: false,
            };
        case SET_SHOW_HISTORY_ITEMS_SECTION:
            return {
                ...state,
                showHistoryItemsSection: action.payload.showHistoryItemsSection
            };
        case SET_HISTORY_DATA:
            return {
                ...state,
                historyItems: action.payload.historyItems
            };
        default:
            return state;
    }
};