import { connect } from 'react-redux';
import { HistorySection } from './HistorySection';
import {doSetShowHistoryItemsSection} from "../../state/actionCreators/main";

const mapStateToProps = state => ({
    showHistoryItemsSection: state.main.showHistoryItemsSection
});

const mapDispatchToProps = dispatch => ({
    onGetHistoryItemsFromLocalStorage: () => {
        const historyItems = localStorage.getItem('typeracerHistoryURLs');
        return dispatch(doSetShowHistoryItemsSection(historyItems !== null));
    }
});

export const HistorySectionContainer = connect(mapStateToProps, mapDispatchToProps)(HistorySection);