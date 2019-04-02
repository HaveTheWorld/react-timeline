import React from 'react';
import AddPointsForm from 'components/AddPointsForm';
import { createSelector } from 'reselect';
import { selectItems, selectMinValue, selectMaxValue } from 'components/Timeline/selectors';
import { connect } from 'react-redux';
import { addItem } from 'components/Timeline/actions';

class AddPointsWrapper extends React.Component {
  render() {
    const { items, addItem, minValue, maxValue } = this.props;
    const btnDisabled = !maxValue;
    return (
      <div>
        {items.map(item => {
          return <AddPointsForm key={item.get('id')} item={item} minValue={minValue} maxValue={maxValue} />;
        })}
        <button disabled={btnDisabled} onClick={addItem}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  selectItems,
  selectMinValue,
  selectMaxValue,
  (items, minValue, maxValue) => ({
    items,
    minValue,
    maxValue,
  })
);

const mapDispatchToProps = {
  addItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPointsWrapper);
