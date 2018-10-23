import * as React from 'react';
import { connect } from 'react-redux';
import fs, { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import os from 'os';
import type { Dispatch } from '../types';
import { initNewInstance, loadSettings } from '../actions/settings';

type Props = {
  isLoaded: boolean,
  tasks: Array<Task>,
  loadSettings: Function,
  initNewInstance: Function
};

const saveLocation = path.join(os.homedir(), '.jobsdone');

class StatePersistence extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { isLoaded: wasLoaded } = prevProps;
    const { isLoaded } = this.props;

    if (wasLoaded !== isLoaded) {
      this.intervalID = setInterval(this.persistData, 5000);
    }
  }

  componentWillUnmount() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  loadData = () => {
    const {
      initNewInstance: initNewInstanceAction,
      loadSettings: loadSettingsAction
    } = this.props;

    if (fs.existsSync(saveLocation)) {
      const stringifiedData = readFileSync(saveLocation);
      const data = JSON.parse(stringifiedData);
      loadSettingsAction(data);
    } else {
      initNewInstanceAction();
    }
  };

  persistData = () => {
    const { tasks } = this.props;

    writeFileSync(saveLocation, JSON.stringify({ settings: null, tasks }));
    console.log('persisted data!', { saveLocation, tasks });
  };

  render() {
    return <React.Fragment />;
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  isLoaded: state.settings.isLoaded
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadSettings: data => dispatch(loadSettings(data)),
  initNewInstance: () => dispatch(initNewInstance())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatePersistence);
