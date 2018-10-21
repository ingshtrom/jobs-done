// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

type Props = {
  classes: {
    root: string,
    title: string
  },
  currentRoute: string,
  routeMap: Object
};

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
};

class MainAppBar extends React.Component<Props> {
  render() {
    const { classes, currentRoute, routeMap } = this.props;

    const routeName = routeMap[currentRoute];

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              {routeName}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentRoute:
    state.router && state.router.location && state.router.location.pathname
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(MainAppBar));
