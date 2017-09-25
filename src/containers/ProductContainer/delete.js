import React, { Component } from 'react';
import {fetchProducts, deleteProduct} from '../../actions/ProductActions';
import TableP from '../../components/ProductPage/TableP';

export default class ListP extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Products: []
        };
    };

    componentDidMount() {
        fetchProducts()
            .then((data) => {
                this.setState(state => {
                    state.Products = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    };

    onDelete(_id) {
        deleteProduct(_id)
            .then((data) => {
                let Products = this.state.Products.filter((post) => {
                    return _id !== post._id;
                });

                this.setState(state => {
                    state.Products = Products;
                    return state;
                }).bind(this);
            })
            .catch((err) => {
                console.error('err', err);
            });
    }

    render() {
        return (
            <div>
                <TableP Products={this.state.Products}
                       onDelete={this.onDelete.bind(this)}
                />
            </div>
        );
    }
}
