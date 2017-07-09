import React, { Component } from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
  FlatButton,
  RaisedButton,
  FontIcon } from 'material-ui';

class Header extends Component {

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Block Change" />
          <FontIcon className="muidocs-icon-custom-sort" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <RaisedButton label="Create Project" primary={true} onTouchTap={() => console.log('clicked')}/>
          <RaisedButton label="Donate" primary={true} onTouchTap={() => console.log('clicked')}/>
          <FlatButton label="Login" primary={true} onTouchTap={() => console.log('clicked')}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Header;
