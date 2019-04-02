import React from 'react';
import { connect } from 'react-redux';
import { setMinMaxValues } from 'components/Timeline/actions';
import { createSelector } from 'reselect';
import { selectMinValue, selectMaxValue } from 'components/Timeline/selectors';

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
    this.setState({ [name]: +e.target.value, error: '' });
  };

  onSubmit = e => {
    e.preventDefault();
    const { minValue, maxValue } = this.state;
    if (minValue >= maxValue) {
      this.setState({ error: 'MinValue must be less than MaxValue' });
      return;
    }
    const { setMinMaxValues } = this.props;
    setMinMaxValues(minValue, maxValue);
  };

  render() {
    const { minValue, maxValue, error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            <span>Min value:</span>
            <br />
            <input type="text" value={minValue || ''} onChange={this.onChange('minValue')} />
          </label>
        </div>
        <div>
          <label>
            <span>Max value:</span>
            <br />
            <input type="text" value={maxValue || ''} onChange={this.onChange('maxValue')} />
          </label>
        </div>
        <button>Submit</button>
        <div>{error}</div>
      </form>
    );
  }
}

const mapStateToProps = createSelector(
  selectMinValue,
  selectMaxValue,
  (minValue, maxValue) => ({
    minValue,
    maxValue,
  })
);

const mapDispatchToProps = {
  setMinMaxValues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MinMaxForm);
