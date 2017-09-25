import React, { Component } from 'react';
import FormP from '../../components/ProductPage/FormP';
import { fetchProduct, updateProduct } from '../../actions/ProductActions';

const UpdateP = React.createClass ({

    getInitialState() {
        return {
            Product: {}
        };
    },

    componentDidMount() {
        fetchProduct(this.props.params.postId)
            .then((data) => {
                this.setState(state => {
                    state.Product = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    },

    handleSubmit(data) {
        updateProduct(this.state.Product._id, data);
        this.props.router.push('/');
    },

    render() {
        return (
            <div>
                <FormP onSubmit={this.handleSubmit.bind(this)}
                      name={this.state.Product.name}
                      price={this.state.Product.price}></FormP>
            </div>
        );
    }
});

export default UpdateP;
