// @flow
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

type Props = {
  classes: {
    menuChevronButton: string
  },
  isOpen: boolean,
  toggleOpen: () => void
};

const styles = theme => ({
  menuChevronButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
});

class SidebarMenuButton extends React.Component<Props> {
  props: Props;

  render() {
    const { classes, isOpen, toggleOpen } = this.props;

    if (isOpen) {
      return (
        <div className={classes.menuChevronButton}>
          <IconButton onClick={toggleOpen}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      );
    }

    return (
      <div className={classes.menuChevronButton}>
        <IconButton onClick={toggleOpen}>
          <ChevronRightIcon />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarMenuButton);
