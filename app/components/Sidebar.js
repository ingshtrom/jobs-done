// @flow
import React, { Component } from 'react';

type Props = {
};

export default class Sidebar extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="pane pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">Favorites</h5>
          <span className="nav-group-item">
            <span className="icon icon-home" />
            connors
          </span>
          <span className="nav-group-item active">
            <span className="icon icon-light-up" />
            Photon
          </span>
          <span className="nav-group-item">
            <span className="icon icon-download"></span>
            Downloads
          </span>
          <span className="nav-group-item">
            <span className="icon icon-folder"></span>
            Documents
          </span>
          <span className="nav-group-item">
            <span className="icon icon-window"></span>
            Applications
          </span>
          <span className="nav-group-item">
            <span className="icon icon-signal"></span>
            AirDrop
          </span>
          <span className="nav-group-item">
            <span className="icon icon-monitor"></span>
            Desktop
          </span>
        </nav>
      </div>
    );
  }
}
