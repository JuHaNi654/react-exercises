import React, { Component } from 'react';
import '../App.css';

class Exercise4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repoList: [],
            searchText: ''
        }
    }
    inputChanged = (event) => {
        this.setState({searchText: event.target.value})
    }
    buttonSearch = () => {
        fetch('https://api.github.com/search/repositories?q=' + this.state.searchText)
        .then((response) => response.json())
        .then((res) => {
            this.setState({
                repoList: res.items
            })
        })
    }
    componentDidMount() {
        fetch('https://api.github.com/search/repositories?q=react')
        .then((response) => response.json())
        .then((res) => {
            this.setState({
                repoList: res.items
            })
        })
    }
    render() {
        const list = this.state.repoList.map(repo => {
            return (
                <tr key={repo.id}>
                    <td>{repo.full_name}</td>
                    <td>{repo.html_url}</td>
                </tr>
            )
        })
        return (
            <div>
                <h3>Repositories</h3>
                <input type="text" value={this.state.searchText} onChange={this.inputChanged} />
                <button onClick={this.buttonSearch}>Search</button>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Url</td>
                        </tr>
                        {list}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Exercise4;