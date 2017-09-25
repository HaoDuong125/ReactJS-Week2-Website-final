import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TableC extends Component {

    constructor(props) {
        super(props);
    };

    deleteHandler(i, e) {
        e.preventDefault();
        this.props.onDelete(this.props.Categoriess[i]._id);
    };

    render() {
        return (
            <div>

                            <div><h2>CATEGORY</h2></div>

                <table className="table table-hover table-responsive">
                    <thead>
                    <tr>
                        <th>Name</th>
                        
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.Categoriess && this.props.Categoriess.map((post, i) => {
                        return (
                            <tr key={post._id}>
                                <td>{post.name}</td>
                            
                                <td>
                                    <Link to={`/posts/updateCategories/${post._id}`} className="btn btn-default btn-sm">Edit</Link>
                                    <btn onClick={this.deleteHandler.bind(this, i)} className="btn btn-danger btn-sm">Delete</btn>
                                </td>
                            </tr>);
                    })}
                    </tbody>
                </table>

                <Link to="/posts/createCategories" className="btn btn-lg btn-success">Create</Link>

            </div>
        );
    }

}