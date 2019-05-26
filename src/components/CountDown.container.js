import { connect } from 'react-redux';
import {CountDown} from "./CountDown";
import {doCalculateWPM, doHandleTimeIsUp} from "../state/actionCreators/main";

const mapDispatchToProps = dispatch => ({
    onCalculateWPM: (secondsPassed) => {
        dispatch(doCalculateWPM(secondsPassed));
    },
    onHandleTimeIsUp: () => {
        dispatch(doHandleTimeIsUp());
    }
});

export const CountDownContainer = connect(null, mapDispatchToProps)(CountDown);