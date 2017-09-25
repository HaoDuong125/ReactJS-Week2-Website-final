import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FormC from '../../components/CategoryPage/FormC';
import { createCategories } from '../../actions/CategoryActions';

export default class CreateC extends Component {

    handleSubmit(data) {
        createCategories(data).then((data)=>{
        this.props.router.push('/Category');
    })
}

    render() {
        return (
            <div>
                <FormC onSubmit={this.handleSubmit.bind(this)}></FormC>
            </div>
        );
    }
}
