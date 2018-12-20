import React, { Component } from 'react';

class Table extends Component {
    render() {
        const { people, deletePerson } = this.props;
        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
            );
        }
        const TableBody = props => {
            let rows = props.people.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{value.name}</td>
                        <td>{value.job}</td>
                        <button onClick={() => props.deletePerson(index)}>Delete</button>
                    </tr>
                );
            })
            return <tbody>{rows}</tbody>;
        }
        return (
            <table>
                <TableHeader />
                <TableBody people={people} deletePerson={deletePerson} />
            </table>
        );
    }
}

export default Table;