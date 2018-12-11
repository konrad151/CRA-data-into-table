import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <>
                <td data-title="Imię">
                    {this.props.name}
                </td>
                <td data-title="Nazwisko">
                    {this.props.last_Name}
                </td>
                <td data-title="Data urodzenia">
                    {this.props.date_of_birth}
                </td>
                <td data-title="Stanowisko">
                    {this.props.position}
                </td>
                <td data-title="Miejsce zamieszkania">
                    {this.props.city}
                </td>
            </>
        );
    }
}

export default TableRow;