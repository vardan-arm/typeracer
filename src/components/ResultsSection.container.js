import {connect} from 'react-redux';
import {ResultsSection} from './ResultsSection';

const mapStateToProps = state => ({
    showResults: state.main.showResults,
    wpm: state.main.wpm,
    completionPercent: state.main.completionPercent,
    duration: state.main.duration,
});

export const ResultsSectionContainer = connect(mapStateToProps)(ResultsSection);