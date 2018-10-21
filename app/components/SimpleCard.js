import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type Props = {
  classes: {
    card: string,
    bullet: string,
    title: string,
    pos: string
  },
  primaryText?: string,
  secondaryText?: string,
  children?: React.Node
};

const styles = {
  card: {
    minWidth: 275,
    borderRadius: 0
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    margin: '12px 0'
  }
};

class SimpleCard extends React.Component<Props> {
  static defaultProps = {
    primaryText: '',
    secondaryText: '',
    children: <React.Fragment />
  };

  render() {
    const { classes, children, primaryText, secondaryText } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            {primaryText}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {secondaryText}
          </Typography>
          {children}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(SimpleCard);
