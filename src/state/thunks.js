import axios from "axios";
import {
    doGetTextFailure,
    doGetTextSuccess,
    doSetHistoryData,
    doSetRequestInProgress,
    doSetShowHistoryItemsSection
} from "./actionCreators/main";

const handleGetTextSuccess = (dispatch, text) => {
    dispatch(doGetTextSuccess(text.join()));
};

const handleGetTextFailure = (dispatch, error) => {
    dispatch(doGetTextFailure(error));
};

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
    const {completionPercent, wpm} = currentState.main;
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
            const typeracerHistory = localStorage.getItem('typeracerHistoryURLs');
            let historyURLs = typeracerHistory !== null ? JSON.parse(typeracerHistory) : [];
            historyURLs.push(response.data);

            localStorage.setItem('typeracerHistoryURLs', JSON.stringify(historyURLs));

            dispatch(doSetRequestInProgress(false));
            dispatch(doSetShowHistoryItemsSection(true));
        })
        .catch(error => {
            console.warn('Save history error: ', error);
            dispatch(doSetRequestInProgress(false));
        })
};

export const getHistoryItems = historyURLs => dispatch => {
    if (historyURLs.length) {
        const historyURLsPromises = historyURLs.map(historyURLItem =>
            axios.get(historyURLItem));

        Promise.all(historyURLsPromises)
            .then(data => {
                const historyItems = [];
                data.map(item => historyItems.push(item.data.params.data));
                dispatch(doSetHistoryData(historyItems.reverse()));
            })
            .catch(error => {
                console.warn('Get History error: ', error);
            });
    }
};