import axios from "axios";
import {doGetTextFailure, doGetTextSuccess, doSetRequestInProgress} from "./actionCreators/main";

const handleGetTextSuccess = (dispatch, text) => {
    dispatch(doGetTextSuccess(text.join()));
};

const handleGetTextFailure = (dispatch, error) => {
    dispatch(doGetTextFailure(error));
};

// const handleSaveHistorySuccess = (dispatch, jsonId) => {
//     dispatch()
// }

export const getText = () => dispatch => {
    dispatch(doSetRequestInProgress(true));

    axios.get('https://baconipsum.com/api/?callback=?', {
        params: {
            type: 'all-meat',
            sentences: 5
        }
    })
        .then(response => {
            handleGetTextSuccess(dispatch, response.data)
        })
        .catch(error => {
            handleGetTextFailure(dispatch, error.message);
        });
};

export const saveHistory = () => (dispatch, getState) => {
    const currentState = getState();
    const { completionPercent, wpm } = currentState.main;
    const date = new Date();

    dispatch(doSetRequestInProgress(true));

    axios.post('https://api.myjson.com/bins', {
        params: {
            data: {
                wpm,
                completionPercent,
                date: date.toLocaleString(),
            }
        }
    })
        .then(response => {
            console.log('save history RESPONSE', response.data);
            dispatch(doSetRequestInProgress(false));
        })
        .catch(error => {
            console.log('save history ERROR', error);
            dispatch(doSetRequestInProgress(false));
        })
};