import { connect } from 'react-redux';
import {WPMInfo} from "./WPMInfo";

const mapStateToProps = state => ({
    wpm: state.main.wpm,
    showResults: state.main.showResults
});

export const WPMInfoContainer = connect(mapStateToProps)(WPMInfo);