// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import DoneIcon from '@material-ui/icons/Done';
import RestoreIcon from '@material-ui/icons/Restore';
import SimpleCard from '../components/SimpleCard';
import { updateSettings } from '../actions/settings';
import { Dispatch, Settings } from '../types';

type Props = {
  saveLocation: string,
  actions: {
    updateSettings: Settings => void
  },
  classes: {
    card: string,
    resetButton: string,
    doneButton: string
  }
};
type State = {
  saveLocation: string
};

const styles = {
  card: {
    margin: '0 12px'
  },
  resetButton: {
    margin: '15px',
    float: 'left'
  },
  doneButton: {
    margin: '15px',
    float: 'right'
  }
};

const EndAdornment = (
  <InputAdornment style={{ width: '100px' }} position="end">
    /.jobs-done
  </InputAdornment>
);

class SettingsPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      saveLocation: props.saveLocation
    };
  }

  state = {
    saveLocation: ''
  };

  handleChange = (key: string) => (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      [key]: event.currentTarget.value
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { updateSettings } = this.props.actions; // eslint-disable-line
    updateSettings(this.state);
  };

  resetForm = () => {
    const { saveLocation } = this.props;
    this.setState({
      saveLocation
    });
  };

  render() {
    const { classes } = this.props;
    const { saveLocation } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <SimpleCard
            className={classes.card}
            primaryText="Save Location"
            secondaryText="Where should I save the state of all active tasks?"
          >
            <FormControl fullWidth>
              <Input
                id="save-location"
                type="text"
                fullWidth
                value={saveLocation}
                onChange={this.handleChange('saveLocation')}
                endAdornment={EndAdornment}
              />
            </FormControl>
          </SimpleCard>
          <Button
            variant="extendedFab"
            aria-label="Reset"
            className={classes.resetButton}
            onClick={this.resetForm}
          >
            <RestoreIcon />
            Reset
          </Button>
          <Button
            type="submit"
            variant="extendedFab"
            aria-label="Save"
            className={classes.doneButton}
          >
            <DoneIcon />
            Save
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  saveLocation: state.settings.saveLocation
});

const mapDispatchToActions = (dispatch: Dispatch) => ({
  actions: {
    updateSettings: settings => dispatch(updateSettings(settings))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(withStyles(styles)(SettingsPage));
