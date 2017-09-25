import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FormP from '../../components/ProductPage/FormP';
import { createProduct } from '../../actions/ProductActions';

export default class CreateP extends Component {

    handleSubmit(data) {
        createProduct(data).then((data)=>{
        this.props.router.push('/');
    })
    }

    render() {
        return (
            <div>
                <FormP onSubmit={this.handleSubmit.bind(this)}></FormP>
            </div>
        );
    }
}
