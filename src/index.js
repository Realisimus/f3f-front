import React from "react";
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {

    constructor() {
        super();
        this.state = { pilots: [] };
        this.loadData();
    }

    loadData() {
        fetch('http://localhost:4433/pilots', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({pilots: data});
            });
        //.catch(err => console.error(this.props.url, err.toString()));
    }

    render() {
        const { pilots } = this.state;
        return (
            <div>
                <ReactTable
                    data={ pilots }
                    columns={[
                        {
                            Header: "ID",
                            accessor: "id",
                            resizable: false,
                            width: 40
                        },
                        {
                            Header: "Login",
                            accessor: "login"
                        },
                        {
                            Header: "First Name",
                            accessor: "first_name"
                        },
                        {
                            Header: "Last Name",
                            accessor: "last_name"
                        },
                        {
                            Header: "License",
                            accessor: "license",
                        },
                        {
                            Header: "Email",
                            accessor: "email",
                        },
                        {
                            Header: "City",
                            accessor: "city",
                        }
                    ]}
                    className="-striped -highlight"
                    showPagination={false}
                    minRows={1}
                    defaultPageSize={50}
                    style={{
                        width: "800px"
                    }}
                />
                <br />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
