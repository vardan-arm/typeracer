import { connect } from 'react-redux';
import {getText} from "../state/thunks";
import {TextBlock} from "./TextBlock";

const mapStateToProps = state => ({
    originalText: state.main.originalText,
    writtenText: state.main.writtenText,
    shouldGetNewText: state.main.shouldGetNewText
});

const mapDispatchToProps = dispatch => ({
    onGetText: () => {
        dispatch(getText());
    }
});

export const TextBlockContainer = connect(mapStateToProps, mapDispatchToProps)(TextBlock);