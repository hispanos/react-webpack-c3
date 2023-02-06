import React from "react";
import Counter from "../counter/Counter.jsx";

class Container extends React.Component {

    constructor() {
        super()
        this.state = {
            initCounter: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState(state => ({
            initCounter: e.target.value
        }))
    }


    render() {
        return (
            <>
            <h1>Hola, soy un componente de clase</h1>
            <input type="number" placeholder="Valor inicial" onChange={(e) => {this.handleChange(e)}} value={this.state.initCounter} />
            <Counter initCounter={this.state.initCounter} />
            </>
        )
    }

}

export default Container;