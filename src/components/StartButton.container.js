import { connect } from 'react-redux';
import {doSetTypingAllowed} from "../state/actionCreators/main";
import {StartButton} from "./StartButton";

const mapStateToProps = state => ({
    typingAllowed: state.main.typingAllowed
});

const mapDispatchToProps = dispatch => ({
    onSetStartTyping: () => {
        dispatch(doSetTypingAllowed(true));
    }
});

export const StartButtonContainer = connect(mapStateToProps, mapDispatchToProps)(StartButton);