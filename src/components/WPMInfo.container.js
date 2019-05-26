import { connect } from 'react-redux';
import {WPMInfo} from "./WPMInfo";

const mapStateToProps = state => ({
    wpm: state.main.wpm,
    typingAllowed: state.main.typingAllowed
});

export const WPMInfoContainer = connect(mapStateToProps)(WPMInfo);