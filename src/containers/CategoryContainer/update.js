import React, { Component } from 'react';
import FormC from '../../components/CategoryPage/FormC';
import { fetchCategories, updateCategories } from '../../actions/CategoryActions';

const UpdateC = React.createClass ({

    getInitialState() {
        return {
            Categories: {}
        };
    },

    componentDidMount() {
        fetchCategories(this.props.params.postId)
            .then((data) => {
                this.setState(state => {
                    state.Categories = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    },

    handleSubmit(data) {
        updateCategories(this.state.Categories._id, data);
        this.props.router.push('/');
    },

    render() {
        return (
            <div>
                <FormC onSubmit={this.handleSubmit.bind(this)}
                      name={this.state.Categories.name}
                      price={this.state.Categories.price}></FormC>
            </div>
        );
    }
});

export default UpdateC;
