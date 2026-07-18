import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: "",
            currency: "Euro",
            result: ""
        };
    }

    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // 1 Euro = 90 INR (example conversion)
        const euro = (this.state.amount / 90).toFixed(2);

        this.setState({
            result: `${this.state.amount} INR = ${euro} Euro`
        });
    }

    render() {

        return (
            <div style={{ textAlign: "center", marginTop: "30px" }}>

                <h1 style={{ color: "green" }}>
                    Currency Convertor!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <table style={{ margin: "0 auto" }}>

                        <tbody>

                            <tr>
                                <td><b>Amount:</b></td>
                                <td>
                                    <input
                                        type="number"
                                        value={this.state.amount}
                                        onChange={this.handleAmountChange}
                                        placeholder="Enter INR"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><b>Currency:</b></td>
                                <td>
                                    <input
                                        type="text"
                                        value={this.state.currency}
                                        readOnly
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="2" style={{ textAlign: "center", paddingTop: "15px" }}>
                                    <button type="submit">
                                        Convert
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="2" style={{ paddingTop: "20px", color: "blue", textAlign: "center" }}>
                                    <h3>{this.state.result}</h3>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </form>

            </div>
        );

    }
}

export default CurrencyConvertor;