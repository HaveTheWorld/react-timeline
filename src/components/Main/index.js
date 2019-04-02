import React from 'react';
import MinMaxForm from 'components/MinMaxForm';
import AddPointsWrapper from 'components/AddPointsWrapper';
import withStyles from 'react-jss';
import styles from './styles';

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.minMax}>
          <MinMaxForm />
        </div>
        <div className={classes.addPoints}>
          <AddPointsWrapper />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
