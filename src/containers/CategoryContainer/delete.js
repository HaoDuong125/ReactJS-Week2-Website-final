import React, { Component } from 'react';
import {fetchCategoriess, deleteCategories} from '../../actions/CategoryActions';
import TableC from '../../components/CategoryPage/TableC';

export default class ListC extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Categoriess: []
        };
    };

    componentDidMount() {
        fetchCategoriess()
            .then((data) => {
                this.setState(state => {
                    state.Categoriess = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    };

    onDelete(_id) {
        deleteCategories(_id)
            .then((data) => {
                let Categoriess = this.state.Categoriess.filter((post) => {
                    return _id !== post._id;
                });

                this.setState(state => {
                    state.Categoriess = Categoriess;
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
                <TableC Categoriess={this.state.Categoriess}
                       onDelete={this.onDelete.bind(this)}
                />
            </div>
        );
    }
}
