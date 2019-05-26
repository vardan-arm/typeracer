import { connect } from 'react-redux';
import {TextInput} from "./TextInput";
import {doHandleTextChange} from "../state/actionCreators/main";

const mapStateToProps = state => ({
    originalText: state.main.originalText,
    wrongInput: state.main.wrongInput,
    caretPositionInOriginalText: state.main.caretPositionInOriginalText,
    writtenText: state.main.writtenText,
    typingAllowed: state.main.typingAllowed,
});

const mapDispatchToProps = dispatch => ({
    onHandleTextChange: ({writtenText, wrongInput}) => {
        dispatch(doHandleTextChange({
            writtenText,
            wrongInput
        }));
    }
});

export const TextInputContainer = connect(mapStateToProps, mapDispatchToProps)(TextInput);