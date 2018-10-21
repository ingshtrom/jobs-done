// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { ListItem, ListItemIcon } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { createTask } from '../actions/tasks';
import { Dispatch, Task } from '../types';

type Props = {
  createTask: Task => void
};
type State = {
  title: string,
  notes?: string
};

class NewTaskListItem extends React.Component<Props, State> {
  state = {
    title: '', // eslint-disable-line
    notes: '' // eslint-disable-line
  };

  handleChange = (key: string) => (
    event: SyntheticKeyboardEvent<HTMLInputElement>
  ) => {
    this.setState({
      [key]: event.currentTarget.value
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { createTask } = this.props; // eslint-disable-line
    createTask(this.state);
    this.setState({
      title: '',
      notes: ''
    });
  };

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ListItem>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <TextField
            autoFocus
            id="title"
            type="text"
            fullWidth
            margin="normal"
            helperText="What are you working on?"
            onChange={this.handleChange('title')}
            value={title}
          />
        </ListItem>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(
  null,
  mapDispatchToProps
)(NewTaskListItem);
