import React, { Component } from 'react';


const FormU = React.createClass({

    getInitialState() {
        return {
            name: this.props.name || ''
            
        }
    },

    componentWillReceiveProps(props) {
        this.setState(props);
    },

    handlenameChange(e) {
        this.setState({
            name: e.target.value
        });
    },

    

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },

    render() {
        return (
            <form name="users" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="users">
                    <h2>ADD USERS</h2>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="users_name">name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="users_name"
                                   required="required"
                                   value={this.state.name}
                                   onChange={this.handlenameChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                    id="users_submit"
                                    className="btn btn-lg btn-success">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

export default FormU;