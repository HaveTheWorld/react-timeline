import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { removeItem, editItem } from 'components/Timeline/actions';

class AddPointsForm extends React.Component {
  state = {
    min: '0',
    max: '',
  };

  componentWillReceiveProps({ item }) {
    const min = item.getIn(['value', 'min']);
    const max = item.getIn(['value', 'max']);
    const state = {};
    if (parseFloat(min) && min !== this.state.min) {
      state.min = min;
    }
    if (parseFloat(max) && max !== this.state.max) {
      state.max = max;
    }
    if (Object.keys(state).length) {
      this.setState(state);
    }
  }

  onChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { min, max } = this.state;
    const { item, editItem } = this.props;
    editItem(item.get('id'), min, max);
  };

  render() {
    const { min, max } = this.state;
    const { item, removeItem, minValue, maxValue } = this.props;
    const btnDisabled = (max && +min >= +max) || +min < +minValue || +min > +maxValue || +max > +maxValue;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>
              <span>min:</span>
              <input type="text" value={min} onChange={this.onChange('min')} />
            </label>
          </div>
          <div>
            <label>
              <span>max:</span>
              <input type="text" value={max} disabled={!min} onChange={this.onChange('max')} />
            </label>
          </div>
          <button disabled={btnDisabled}>Add Point</button>
          <button type="button" onClick={() => removeItem(item.get('id'))}>
            Remove Point
          </button>
        </form>
        <br />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  removeItem,
  editItem,
};

export default connect(
  null,
  mapDispatchToProps
)(AddPointsForm);
