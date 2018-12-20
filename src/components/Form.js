import React, { Component } from "react";
class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            "name": "",
            "job": ""
        };
        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label>name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                <label>job</label>
                <input type="text" name="job" value={job} onChange={this.handleChange}></input>
                <input type="button" value="Add person" onClick={this.submitForm}></input>
            </form>
        );
    }
}
export default Form;