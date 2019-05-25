import axios from "axios";
import {doGetTextFailure, doGetTextSuccess} from "./actionCreators/main";

const handleGetTextSuccess = (dispatch, text) => {
    dispatch(doGetTextSuccess(text.join()));
};

const handleGetTextFailure = (dispatch, error) => {
    dispatch(doGetTextFailure(error));
};

export const getText = () => dispatch => {
    axios.get('https://baconipsum.com/api/?callback=?', {
        params: {
            type: 'all-meat',
            sentences: 5
        }
    })
        .then(function (response) {
            handleGetTextSuccess(dispatch, response.data)
        })
        .catch(function (error) {
            handleGetTextFailure(dispatch, error.message);
        });
};