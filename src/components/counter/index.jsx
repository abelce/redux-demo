import React, {Component} from 'react';

class Counter extends Component {
    render() {
        const {value, onIncreaseClick } = this.props;
        return(
            <div>
                <div>{value}</div>
                erqwrhqwrehqhroqwruoqwuroquowroqwuro
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

export default Counter;