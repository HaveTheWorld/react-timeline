import React from 'react';
import InputRange from 'react-input-range';
import withStyles from 'react-jss';
import styles from './styles';

class TimelineItem extends React.Component {
  render() {
    const { classes, minValue, maxValue, value, isPoint } = this.props;

    return (
      <div className={classes.item}>
        <InputRange minValue={+minValue} maxValue={+maxValue} value={value} onChange={() => {}} />
      </div>
    );
  }
}

export default withStyles(styles)(TimelineItem);
