import { connect } from 'react-redux';
import { ShowHistory } from "./ShowHistory";
import {getHistoryItems} from "../../state/thunks";

const mapStateToProps = state => ({
    historyItems: state.main.historyItems
});

const mapDispatchToProps = dispatch => ({
    onGetHistoryItems: () => {
        const historyURLsItem = localStorage.getItem('typeracerHistoryURLs');
        const historyURLs = historyURLsItem !== null ?
            JSON.parse(historyURLsItem).map(historyItem => historyItem.uri) :
            [];
        dispatch(getHistoryItems(historyURLs));
    }
});

export const ShowHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(ShowHistory);