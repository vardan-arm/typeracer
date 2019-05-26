import { connect } from 'react-redux';
import { App } from "./App";

const mapStateToProps = state => ({
    typingAllowed: state.main.typingAllowed
});

export const AppContainer = connect(mapStateToProps)(App);