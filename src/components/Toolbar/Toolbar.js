import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton drawerClickHandler = {props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"> <a href="/" >LOGO</a> </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li> <a href="/" >Usuarios</a></li>
                    <li> <a href="/" >Usuarios</a></li>
                </ul>
            </div>
        </nav>
    </header>
); 

export default toolbar;