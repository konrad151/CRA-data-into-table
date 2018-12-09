import React from 'react';

const Table = () => {
    return (
        <div className="well">
            <table className="table">
                <tbody>
                    <tr>
                        <th>
                            Imię
                        </th>
                        <th>
                            Nazwisko
                        </th>
                        <th>
                            Data urodzenia
                        </th>
                        <th>
                            Stanowisko
                        </th>
                        <th>
                            Miejsce zamieszkania
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Jan
                        </td>
                        <td>
                            Kowalski
                        </td>
                        <td>
                            15.02.1986
                        </td>
                        <td>
                            Project Manager
                        </td>
                        <td>
                            Wrocław
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Anna
                        </td>
                        <td>
                            Nowak
                        </td>
                        <td>
                            25.06.1985
                        </td>
                        <td>
                            Team Leader
                        </td>
                        <td>
                            Wrocław
                        </td>
                    </tr>
                    <tr>
                        <td>
                            John
                        </td>
                        <td>
                            Doe
                        </td>
                        <td>
                            21.03.1986
                        </td>
                        <td>
                            Senior PHP Devloper
                        </td>
                        <td>
                            Londyn
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Katarzyna
                        </td>
                        <td>
                            Wiśniewska
                        </td>
                        <td>
                            11.03.1994
                        </td>
                        <td>
                            Frontend Developer
                        </td>
                        <td>
                            Katowice
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Jacek
                        </td>
                        <td>
                            Zieliński
                        </td>
                        <td>
                            11.07.1992
                        </td>
                        <td>
                            Software Tester
                        </td>
                        <td>
                            Wrocław
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Table;