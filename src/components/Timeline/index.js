import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import withStyles from 'react-jss';
import TimelineItem from 'components/TimelineItem';
import { selectMinValue, selectMaxValue, selectItems } from './selectors';
import { editItem } from './actions';
import styles from './styles';

class Timeline extends React.Component {
  onChange = itemId => value => {
    if (typeof value === 'object') {
      this.props.editItem(itemId, value.min, value.max);
    } else {
      this.props.editItem(itemId, value);
    }
  };

  render() {
    const { classes, minValue, maxValue, items } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.timeline}>
          <InputRange minValue={+minValue} maxValue={+maxValue} value={0} onChange={() => {}} />
        </div>
        {items.map(item => {
          const min = item.getIn(['value', 'min']);
          const max = item.getIn(['value', 'max']);
          if (isNaN(parseFloat(min))) {
            return null;
          }
          const value = !isNaN(parseFloat(max)) ? { min: +min, max: +max } : +min;
          const isPoint = typeof value !== 'object';
          const id = item.get('id');
          return (
            <TimelineItem
              key={id}
              minValue={minValue}
              maxValue={maxValue}
              value={value}
              isPoint={isPoint}
              onChange={this.onChange(id)}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  selectMinValue,
  selectMaxValue,
  selectItems,
  (minValue, maxValue, items) => ({
    minValue,
    maxValue,
    items,
  })
);

const mapDispatchToProps = {
  editItem,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Timeline);
