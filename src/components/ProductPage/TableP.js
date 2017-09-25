import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TableP extends Component {

    constructor(props) {
        super(props);
    };

    deleteHandler(i, e) {
        e.preventDefault();
        this.props.onDelete(this.props.Products[i]._id);
    };

    render() {
        return (
            <div>

                <div><h2>PRODUCTS</h2></div>
                <table className="table table-hover table-responsive">


                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.Products && this.props.Products.map((post, i) => {
                        return (
                            <tr key={post._id}>
                                <td>{post.name}</td>
                                <td>{post.price}</td>
                                <td>
                                    <Link to={`/posts/updateProduct/${post._id}`} className="btn btn-default btn-sm">Edit</Link>
                                    <btn onClick={this.deleteHandler.bind(this, i)} className="btn btn-danger btn-sm">Delete</btn>
                                </td>
                            </tr>);
                    })}
                    </tbody>
                </table>

                <Link to="/posts/createProduct" className="btn btn-lg btn-success">Create</Link>


                        <p> --------------------------------- </p>


                <Link to="/Category" className="btn btn-primary btn-lg">Page Category</Link>

                <Link to="/Users" className="btn btn-primary btn-lg">Page User</Link>
            </div>
        );
    }

}