import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";


class TodoTable extends Component {
    render() {
        const columns = [{
            Header: 'Date',
            accessor: 'date'
        }, {
            Header: 'Description',
            accessor: 'description'
        }]
        return (
            <div>
                <ReactTable data={this.props.todo} columns={columns} sortable={true}
                defaultPageSize={10} />
            </div>
        )
    }
}

export default TodoTable;