import { connect } from 'react-redux';
import { Settings } from './Settings';
import {doSetDuration} from "../state/actionCreators/main";

const mapStateToProps = state => ({
    duration: state.main.duration,
    showSettingsSection: state.main.showSettingsSection
});

const mapDispatchToProps = dispatch => ({
    onSetDuration: duration => {
        dispatch(doSetDuration(duration));
    }
});

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);