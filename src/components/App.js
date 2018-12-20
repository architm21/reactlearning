import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
            ]
        }
    }
    deletePerson = (index) => {
        const { people } = this.state;
        this.setState({
            people: people.filter((value, i) => {
                return index !== i;
            })
        });
    }

    handleSubmit = person => {
        this.setState({
            people: [...this.state.people, person]
        });
    }

    render() {
        return (
            <div className="parentContainer">
                <Table people={this.state.people} deletePerson={this.deletePerson} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;