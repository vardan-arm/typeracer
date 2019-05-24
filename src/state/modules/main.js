import {
    GET_TEXT_SUCCESS,
    GET_TEXT_FAILURE
} from "../actionCreators/main";

const initialState = {
    textToType: '',
    error: '',
    shouldGetNewText: true,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEXT_SUCCESS:
            return {
                ...state,
                textToType: action.payload.text,
                shouldGetNewText: false,
            };
        case GET_TEXT_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                shouldGetNewText: false,
            };
        default:
            return state;
    }
};