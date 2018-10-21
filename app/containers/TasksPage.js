// @flow
import React from 'react';
import TaskList from '../components/TaskList';

type Props = {};

class TasksPage extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <TaskList />
      </React.Fragment>
    );
  }
}

export default TasksPage;
