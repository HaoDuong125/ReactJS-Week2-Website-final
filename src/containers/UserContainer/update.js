import React, { Component } from 'react';
import FormU from '../../components/UserPage/FormU';
import { fetchUsers, updateUsers } from '../../actions/UserActions';

const UpdateU = React.createClass ({

    getInitialState() {
        return {
            Users: {}
        };
    },

    componentDidMount() {
        fetchUsers(this.props.params.postId)
            .then((data) => {
                this.setState(state => {
                    state.Users = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    },

    handleSubmit(data) {
        updateUsers(this.state.Users._id, data);
        this.props.router.push('/');
    },

    render() {
        return (
            <div>
                <FormU onSubmit={this.handleSubmit.bind(this)}
                      name={this.state.Users.name}></FormU>
            </div>
        );
    }
});

export default UpdateU;
