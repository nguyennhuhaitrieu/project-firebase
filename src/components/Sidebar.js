import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

const menus =[
  {to: '/', exact: true, name: 'Task'},
  {to: '/signin', exact: true, name: 'SignIn'},
  {to: '/signup', exact: true, name: 'SignUp'},
  {to: '/user', exact: true, name: 'User'}
];

class Sidebar extends Component {
  render() {
    return (
      <div className="list-group">
          {this.showMenu(menus)}
      </div>
    );
  }

  showMenu(menus){
    let xhtml = null;
    if(menus.length > 0 ){
      xhtml = menus.map((menu, index)=> {
        return (
            <NavLink key={index} exact={menu.exact} to={menu.to} activeClassName="active" className="list-group-item">{menu.name}</NavLink>
        );
      });
    }
    return xhtml
  }
}

export default Sidebar;