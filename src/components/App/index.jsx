import React, {Component} from 'react';
import {connect} from 'react-redux'
import Counter from '../counter';

const mapStateToProps = (state) => {
    return {
        value: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

const increaseAction = { type: 'increase' }

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default App;