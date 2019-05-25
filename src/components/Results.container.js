import { connect } from 'react-redux';
import {Results} from "./Results";

const mapStateToProps = state => ({
    wpm: state.main.wpm
});

export const ResultsContainer = connect(mapStateToProps)(Results);