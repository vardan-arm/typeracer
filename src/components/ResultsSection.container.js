import {connect} from 'react-redux';
import {ResultsSection} from './ResultsSection';

const mapStateToProps = state => ({
    showResults: state.main.showResults,
    wpm: state.main.wpm,
    completionPercent: (state.main.caretPositionInOriginalText / state.main.originalText.length * 100).toFixed(1)
});

export const ResultsSectionContainer = connect(mapStateToProps)(ResultsSection);