import { connect } from 'react-redux';
import {CountDown} from "./CountDown";
import {doCalculateWPM} from "../state/actionCreators/main";

const mapDispatchToProps = dispatch => ({
    onCalculateWPM: (secondsPassed) => {
        dispatch(doCalculateWPM(secondsPassed));
    }
});

export const CountDownContainer = connect(null, mapDispatchToProps)(CountDown);