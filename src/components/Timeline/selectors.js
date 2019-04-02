import { createSelector } from 'reselect';

const selectTimeline = state => state.timeline;

export const selectMinValue = createSelector(
  selectTimeline,
  state => state.get('minValue')
);

export const selectMaxValue = createSelector(
  selectTimeline,
  state => state.get('maxValue')
);

export const selectItems = createSelector(
  selectTimeline,
  state => state.get('items')
);
