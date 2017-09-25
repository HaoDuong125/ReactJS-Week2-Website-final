import React, { Component } from 'react';
import {fetchUserss, deleteUsers} from '../../actions/UserActions';
import TableU from '../../components/UserPage/TableU';

export default class ListU extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Userss: []
        };
    };

    componentDidMount() {
        console.log("aaaaaa")
        fetchUserss()
            .then((data) => {
                console.log(data)
                this.setState(state => {
                    state.Userss = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    };

    onDelete(_id) {
        deleteUsers(_id)
            .then((data) => {
                let Userss = this.state.Userss.filter((post) => {
                    return _id !== post._id;
                });

                this.setState(state => {
                    state.Userss = Userss;
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
                <TableU Userss={this.state.Userss}
                       onDelete={this.onDelete.bind(this)}/>
            </div>
        );
    }
}
