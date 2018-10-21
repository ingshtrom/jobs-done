// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TuneIcon from '@material-ui/icons/Tune';
import routes from '../constants/routes.json';

export const mainListItems = (
  <NavLink to={routes.TASKS}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tasks" />
    </ListItem>
  </NavLink>
);

export const secondaryListItems = (
  <NavLink to={routes.SETTINGS}>
    <ListItem button>
      <ListItemIcon>
        <TuneIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </NavLink>
);
