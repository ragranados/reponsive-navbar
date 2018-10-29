import React, { Component } from 'react';
import './index.css';
//import Toolbar from './components/Toolbar/Toolbar';
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import Backdrop from './components/Backdrop/Backdrop';
import Avatar from './components/AvatarHorizontal/AvatarHorizontal';

class App extends Component {
  /*state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };*/

  render() {
    /*let sideDrawer;
    let backdrop;

    if (false) {
      backdrop = <Backdrop/>;
    }*/

    return (
      <div className="hola">
        <Avatar />
      </div>
    );
  }
}

export default App;
