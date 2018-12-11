import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import styles from './Table.module.scss';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workers: [],
            originalWorkers: []
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            workers: props.workers,
            originalWorkers: props.workers
        });
    }

    renderTableRows = () => {
        const allWorkers = [...this.state.workers];
        return (
            allWorkers.map((worker, index) => {
                return (
                    <tr key={index}>
                        <TableRow
                        name={worker.name}
                        last_Name={worker.last_Name}
                        date_of_birth={worker.date_of_birth}
                        position={worker.position}
                        city={worker.city}
                        />
                    </tr>
                )
            })
        )
    }

    sortByRows(event, sortKey){
        let presentWorkers = [...this.state.workers];
        const originalWorkers = [...this.state.originalWorkers];

        const sortByType = (a,b,sortKey) => {
            let aSortKey;
            let bSortKey;
            if (sortKey === 'date_of_birth') {
                aSortKey = a[sortKey].split('.').reverse().join('');
                bSortKey = b[sortKey].split('.').reverse().join('');
            } else {
                aSortKey = a[sortKey];
                bSortKey = b[sortKey];
            }
            return aSortKey.localeCompare(bSortKey)
        }

        const sortKeyRowsData = (data) => data.map(item => item[sortKey])

        const sortedOriginalWorkers = [...originalWorkers].sort((a,b) => sortByType(a,b,sortKey));
        let sortedWorkers = [];
        if (JSON.stringify(sortKeyRowsData(presentWorkers)) === JSON.stringify(sortKeyRowsData(sortedOriginalWorkers))) {
            sortedWorkers =  [...presentWorkers].sort((a,b) => sortByType(a,b,sortKey)).reverse();
        } else {
            sortedWorkers =  [...presentWorkers].sort((a,b) => sortByType(a,b,sortKey));
        }
        this.setState({workers: sortedWorkers});
        
        this.renderTableRows();
    }

    render() {
        return (
            <table id={styles.noMoreTables} className="table table-bordered table-striped table-condensed">
                <thead>
                    <tr>
                        <th className={styles.clickable} onClick={e => this.sortByRows(e, 'name')}>
                            Imię
                        </th>
                        <th className={styles.clickable} onClick={e => this.sortByRows(e, 'last_Name')}>
                            Nazwisko
                        </th>
                        <th className={styles.clickable} onClick={e => this.sortByRows(e, 'date_of_birth')}>
                            Data urodzenia
                        </th>
                        <th className={styles.clickable} onClick={e => this.sortByRows(e, 'position')}>
                            Stanowisko
                        </th>
                        <th className={styles.clickable} onClick={e => this.sortByRows(e, 'city')}>
                            Miejsce zamieszkania
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        );
    }
};

export default Table;