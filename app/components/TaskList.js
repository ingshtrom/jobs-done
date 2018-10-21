// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import NewTaskListItem from './NewTaskListItem';
import { Task } from '../types';

type Props = {
  tasks: Array<Task>
};

const styles = (/* theme */) => ({
  //   menuChevronButton: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'flex-end',
  //     padding: '0 8px',
  //     ...theme.mixins.toolbar,
  //   }
});

class TaskList extends React.Component<Props> {
  render() {
    const { tasks } = this.props;

    return (
      <List>
        <NewTaskListItem />
        <Divider />
        {tasks.map(t => (
          <ListItem button key={t.id}>
            <ListItemText primary={t.title} secondary={t.notes} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(TaskList));
