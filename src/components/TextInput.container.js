import { connect } from 'react-redux';
import {TextInput} from "./TextInput";
import {doHandleTextChange} from "../state/actionCreators/main";

const mapStateToProps = state => ({
    originalText: state.main.originalText,
    wrongInput: state.main.wrongInput,
    caretPositionInOriginalText: state.main.caretPositionInOriginalText,
    writtenText: state.main.writtenText
});

const mapDispatchToProps = dispatch => ({
    onHandleTextChange: ({writtenText, wrongInput}) => {
        console.log({writtenText});
        dispatch(doHandleTextChange({
            writtenText,
            wrongInput
        }));
    }
});

export const TextInputContainer = connect(mapStateToProps, mapDispatchToProps)(TextInput);