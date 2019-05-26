import { connect } from 'react-redux';
import { Settings } from './Settings';
import {doSetParamsAndStart} from "../state/actionCreators/main";

const mapStateToProps = state => ({
    duration: state.main.duration,
    typingAllowed: state.main.typingAllowed
});

const mapDispatchToProps = dispatch => ({
    onSetParamsAndStart: duration => {
        dispatch(doSetParamsAndStart(duration));
    }
});

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);