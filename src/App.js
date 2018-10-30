import React, { Component } from 'react';
import './index.css';
//import Toolbar from './components/Toolbar/Toolbar';
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import Backdrop from './components/Backdrop/Backdrop';
//import AvatarHorizontal from './components/AvatarHorizontal/AvatarHorizontal';
//import AvatarHorizontal from './components/AvatarVertical/AvatarVertical';
import AvatarVertical from './components/AvatarVertical/AvatarVertical';
//import AvatarHorizontal from './components/AvatarHorizontal/AvatarHorizontal';

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
        <AvatarVertical />
      </div>
    );
  }
}

export default App;
