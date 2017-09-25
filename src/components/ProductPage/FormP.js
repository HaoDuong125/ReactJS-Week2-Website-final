import React, { Component } from 'react';

const FormP = React.createClass({

    getInitialState() {
        return {
            name: this.props.name || '',
            price: this.props.price || ''
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

    handlepriceChange(e) {
        this.setState({
            price: e.target.value
        });
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },

    render() {
        return (


            <form name="product" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="product">
                <h2>ADD PRODUCTS</h2>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="product_price">price</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="product_price"
                                   required="required"
                                   value={this.state.price}
                                   onChange={this.handlepriceChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="product_name">name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="product_name"
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
                                    id="product_submit"
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

export default FormP;