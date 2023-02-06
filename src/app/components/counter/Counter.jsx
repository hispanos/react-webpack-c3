import React from "react";
import './style.scss'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.initCounter,
            title: 'Hola soy un estado'
        }
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus() {
        this.setState((state) => ({
            ...state,
            value: state.value + 1
        }))
    }

    handleMinus() {
        this.setState((state) => ({
            ...state,
            value: state.value > this.props.initCounter ? state.value - 1 : this.props.initCounter
        }))
    }

    render() {
        return (
            <>
                <h2>{this.props.initCounter}</h2>
                <h3>{this.state.title}</h3>
                <div className="counter">
                    <button onClick={this.handleMinus}>-</button>
                    <span>{this.state.value}</span>
                    <button onClick={this.handlePlus}>+</button>
                </div>
            </>
        )
    }

}

export default Counter;