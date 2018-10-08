// @flow
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="window">
        {/* put header here if you want */}
        <div className="window-content">
          <div className="pane-group">
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}
