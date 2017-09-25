import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute, withRouter, IndexLink, Link  } from 'react-router';

import ListP from './containers/ProductContainer/delete';
import CreateP from './containers/ProductContainer/create';
import UpdateP from './containers/ProductContainer/update';


import ListC from './containers/CategoryContainer/delete';
import CreateC from './containers/CategoryContainer/create';
import UpdateC from './containers/CategoryContainer/update';

import ListU from './containers/UserContainer/delete';
import CreateU from './containers/UserContainer/create';
import UpdateU from './containers/UserContainer/update';

import NotFoundPage from './components/NotFoundPage';

export default class App extends Component {


  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }


  render() {
            const { location } = this.props;
    const { collapsed } = this.state;
    const productClass = "localhost:3000" ;
    const categoryClass = "localhost:3000";
    const userClass ="localhost:3000";
    const navClass = collapsed ? "collapse" : "";




    return (
            <Router history={browserHistory}>


           <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={productClass}>
                <IndexLink to="" onClick={this.toggleCollapse.bind(this)}>Product</IndexLink>
              </li>
              <li class={categoryClass}>
                <Link to="/Category" onClick={this.toggleCollapse.bind(this)}>Category</Link>
              </li>
              <li class={userClass}>
                <Link to="/UserS" onClick={this.toggleCollapse.bind(this)}>User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      

      
        <Route path="/" component={ListP}>
            <IndexRoute to="/posts"/>
        </Route>
        <Route path="/posts/createProduct" component={withRouter(CreateP)}/>
        <Route path="/posts/updateProduct/:postId" component={withRouter(UpdateP)}/>
        


          
        <Route path="/Category" component={ListC}>
            <IndexRoute to="/posts/Category"/>
        </Route>
        <Route path="/posts/createCategories" component={withRouter(CreateC)}/>
        <Route path="/posts/updateCategories/:postId" component={withRouter(UpdateC)}/>


          
        <Route path="/Users" component={ListU}>
            <IndexRoute to="/posts/Users"/>
        </Route>
        <Route path="/posts/createUsers" component={withRouter(CreateU)}/>
        <Route path="/posts/updateUsers/:postId" component={withRouter(UpdateU)}/>

 
                  <Route path="*" component={NotFoundPage}/>

      </Router>
    );
  }
}
