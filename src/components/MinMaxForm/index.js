import React from 'react';
import { connect } from 'react-redux';
import { setMinMaxValues } from 'components/Timeline/actions';
import { createSelector } from 'reselect';
import { selectMinValue, selectMaxValue, selectItems } from 'components/Timeline/selectors';

class MinMaxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: props.minValue,
      maxValue: props.maxValue,
      error: '',
    };
  }

  componentWillReceiveProps({ minValue, maxValue }) {
    this.setState({ minValue, maxValue });
  }

  onChange = name => e => {
    this.setState({
      [name]: e.target.value.replace(/^-?0\d+/, p => p.replace('0', '')),
      error: '',
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { minValue, maxValue } = this.state;
    if (+minValue >= +maxValue) {
      this.setState({ error: 'MinValue must be less than MaxValue' });
      return;
    }
    const { setMinMaxValues } = this.props;
    setMinMaxValues(minValue, maxValue);
  };

  render() {
    const { minValue, maxValue, error } = this.state;
    const { items } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            <span>Min value:</span>
            <br />
            <input type="text" disabled={items.size} value={minValue} onChange={this.onChange('minValue')} />
          </label>
        </div>
        <div>
          <label>
            <span>Max value:</span>
            <br />
            <input type="text" disabled={items.size} value={maxValue} onChange={this.onChange('maxValue')} />
          </label>
        </div>
        <button disabled={items.size}>Submit</button>
        <div>{error}</div>
      </form>
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
  setMinMaxValues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MinMaxForm);
