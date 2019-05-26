import {connect} from 'react-redux';
import {TryAgain} from './TryAgain';
import {doSetTryAgain} from "../state/actionCreators/main";

const mapStateToProps = state => ({
    typingAllowed: state.main.typingAllowed,
    showResults: state.main.showResults,
});

const mapDispatchToProps = dispatch => ({
    onSetTryAgain: () => {
        dispatch(doSetTryAgain());
    }
});

export const TryAgainContainer = connect(mapStateToProps, mapDispatchToProps)(TryAgain);