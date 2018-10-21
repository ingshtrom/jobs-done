// @flow
import * as React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems, secondaryListItems } from './drawerListItems';
import SidebarMenuButton from './SidebarMenuButton';

type Props = {
  children: ?React.Node,
  classes: {
    root: string,
    drawerPaper: string,
    drawerPaperClose: string,
    content: string
  }
};

type State = {
  isOpen: boolean
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

class Sidebar extends React.Component<Props, State> {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { children, classes } = this.props;
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !isOpen && classes.drawerPaperClose
              )
            }}
            open={isOpen}
          >
            <SidebarMenuButton isOpen={isOpen} toggleOpen={this.toggleOpen} />
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>
          <main className={classes.content}>{children}</main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Sidebar);
