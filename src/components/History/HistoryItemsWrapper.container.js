import { connect } from 'react-redux';
import {HistoryItemsWrapper} from "./HistoryItemsWrapper";

const mapStateToProps = state => ({
    historyItems: state.main.historyItems,
});

export const HistoryItemsWrapperContainer = connect(mapStateToProps)(HistoryItemsWrapper);