import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FormU from '../../components/UserPage/FormU';
import { createUsers } from '../../actions/UserActions';

export default class CreateU extends Component {

    handleSubmit(data) {
        createUsers(data).then( (data) => {

        this.props.router.push('/Users');
        })
    }

    render() {
        return (
            <div>
                <FormU onSubmit={this.handleSubmit.bind(this)}></FormU>
            </div>
        );
    }
}
