import { connect } from 'react-redux';
import {TextInput} from "./TextInput";
import {doHandleTextChange} from "../state/actionCreators/main";

const mapDispatchToProps = dispatch => ({
    onHandleTextChange: text => {
        dispatch(doHandleTextChange(text));
    }
});

export const TextInputContainer = connect(null, mapDispatchToProps)(TextInput);