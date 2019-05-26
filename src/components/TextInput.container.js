import { connect } from 'react-redux';
import {TextInput} from "./TextInput";
import {doHandleTextChange, doHandleTimeIsUp} from "../state/actionCreators/main";
import {saveHistory} from "../state/thunks";

const mapStateToProps = state => ({
    originalText: state.main.originalText,
    wrongInput: state.main.wrongInput,
    caretPositionInOriginalText: state.main.caretPositionInOriginalText,
    writtenText: state.main.writtenText,
    typingAllowed: state.main.typingAllowed,
});

const mapDispatchToProps = dispatch => ({
    onHandleTextChange: ({writtenText, wrongInput, caretPositionInOriginalText, originalText}) => {
        if (caretPositionInOriginalText !== originalText.length - 1 || wrongInput) {
            dispatch(doHandleTextChange({
                writtenText,
                wrongInput
            }));
        } else {
            dispatch(doHandleTimeIsUp(true));
            dispatch(saveHistory());
        }
    }
});

export const TextInputContainer = connect(mapStateToProps, mapDispatchToProps)(TextInput);